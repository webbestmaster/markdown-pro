// @flow

import {getParent} from './parser-helper';
import type {LineDataType, SelectorType} from './parser-type';
import {emptyString, selectorHeaderList, selectorList} from './parser-const';
import {parseHeader} from './tag/header';

function getSelector(line: string, spaceCount: number): SelectorType {
    // eslint-disable-next-line no-loops/no-loops
    for (const selector of selectorList) {
        if (line.indexOf(selector, spaceCount) === spaceCount) {
            return selector;
        }
    }
    return emptyString;
}

// eslint-disable-next-line complexity
export function parseLine(
    line: string,
    lineIndex: number,
    allLineList: Array<string>,
    structuredLineDataList: Array<LineDataType>,
    savedLineDataList: Array<LineDataType>
): LineDataType {
    const trimmedLine = line.trim();
    const isEmptyString = trimmedLine === emptyString;
    const rawSpaceCount = isEmptyString
        ? savedLineDataList[savedLineDataList.length - 1].spaceCount
        : line.search(/\S/);
    const spaceCount = rawSpaceCount < 0 ? 0 : rawSpaceCount;

    const selector = isEmptyString ? emptyString : getSelector(line, spaceCount);

    const lineData = {
        childList: [],
        lineIndex,
        spaceCount,
        selector,
        line: isEmptyString ? emptyString : line,
        isFirst: true,
        isLast: true,
    };

    const parentLineData = getParent(lineData, savedLineDataList);
    const {childList} = parentLineData;

    const prevChild = childList.length === 0 ? null : childList[childList.length - 1];

    if (prevChild) {
        prevChild.isLast = false;
        lineData.isFirst = false;
    }

    parentLineData.childList.push(lineData);
    savedLineDataList.push(lineData);

    return lineData;
}

export function parseLineData(lineData: LineDataType): string {
    const {selector, spaceCount, line} = lineData;

    // string has spaces only OR empty string
    if (spaceCount === -1) {
        return line;
    }

    if (selectorHeaderList.includes(selector)) {
        return parseHeader(lineData);
    }

    return line;
}
