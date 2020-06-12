// @flow

import {getParent} from './parser-helper';
import type {LineDataType, SelectorType} from './parser-type';
import {emptyString, selectorList} from './parser-const';

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
) {
    const trimmedLine = line.trim();
    const isEmptyString = trimmedLine === emptyString;
    const rawSpaceCount = isEmptyString
        ? savedLineDataList[savedLineDataList.length - 1].spaceCount
        : line.search(/\S/);
    const spaceCount = rawSpaceCount < 0 ? 0 : rawSpaceCount;

    const selector = isEmptyString ? emptyString : getSelector(line, spaceCount);

    const lineContent = trimmedLine.replace(selector, emptyString).trim();

    const lineData: LineDataType = {
        lineIndex,
        spaceCount,
        selector,
        line: isEmptyString ? emptyString : line,
        trimmedLine,
        lineContent,
        childList: [],
        additionalLineList: [],
        // isFirst: true,
        // isLast: true,
    };

    if (lineData.selector === emptyString && lineContent.length > 0) {
        const prevItemIndex = savedLineDataList.length - 1;
        const prevItem = prevItemIndex in savedLineDataList ? savedLineDataList[prevItemIndex] : null;

        if (prevItem && prevItem.lineContent.length > 0) {
            prevItem.additionalLineList.push(lineContent);
            return;
        }
    }

    const parentLineData = getParent(lineData, savedLineDataList);

    parentLineData.childList.push(lineData);
    savedLineDataList.push(lineData);
}
