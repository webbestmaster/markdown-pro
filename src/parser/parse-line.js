// @flow

import {cleanLine, getParent} from './parser-helper';
import type {LineDataType, ShortLineInfoType} from './parser-type';
import {emptyString, oLParseDataList, selectorList} from './parser-const';

function getSelector(trimmedLine: string): ShortLineInfoType {
    // eslint-disable-next-line no-loops/no-loops
    for (const selector of selectorList) {
        if (trimmedLine.indexOf(selector) === 0) {
            return {
                selector,
                lineContent: cleanLine(trimmedLine.replace(selector, emptyString)),
            };
        }
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const oLParseData of oLParseDataList) {
        const {selector, regExpSearchSelector} = oLParseData;

        if (trimmedLine.search(regExpSearchSelector) === 0) {
            return {
                selector,
                lineContent: cleanLine(trimmedLine.replace(regExpSearchSelector, emptyString)),
            };
        }
    }

    return {
        selector: emptyString,
        lineContent: trimmedLine,
    };
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

    const {selector, lineContent} = isEmptyString
        ? {
            selector: emptyString,
            lineContent: emptyString,
        }
        : getSelector(trimmedLine);

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
