// @flow

import {cleanLine, getIsAllSymbolsEqual} from './util/string';
import {getParent} from './util/navigation';
import type {DocumentMetaType, LineDataType, ShortLineInfoType} from './parser-type';
import {emptyString, oLParseDataList, selectorCodeList, selectorLineList, selectorList} from './parser-const';

// eslint-disable-next-line complexity
function getShortInfo(trimmedLine: string): ShortLineInfoType {
    // eslint-disable-next-line no-loops/no-loops
    for (const selector of selectorList) {
        if (trimmedLine.startsWith(selector)) {
            return {
                selector,
                lineContent: cleanLine(trimmedLine.replace(selector, emptyString)),
            };
        }
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const lineSelector of selectorLineList) {
        if (trimmedLine.startsWith(lineSelector) && getIsAllSymbolsEqual(trimmedLine)) {
            return {
                selector: lineSelector,
                lineContent: emptyString,
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
        lineContent: cleanLine(trimmedLine),
    };
}

// eslint-disable-next-line complexity, max-params, max-statements, sonarjs/cognitive-complexity
export function parseLine(
    line: string,
    lineIndex: number,
    allLineList: Array<string>,
    structuredLineDataList: Array<LineDataType>,
    savedLineDataList: Array<LineDataType>,
    documentMeta: DocumentMetaType
) {
    const trimmedLine = line.trim();
    const isEmptyString = trimmedLine === emptyString;
    const rawSpaceCount = isEmptyString
        ? savedLineDataList[savedLineDataList.length - 1].spaceCount
        : line.search(/\S/);
    const spaceCount = rawSpaceCount < 0 ? 0 : rawSpaceCount;
    const defaultSelectorData: ShortLineInfoType = {
        selector: emptyString,
        lineContent: emptyString,
    };

    const {selector, lineContent} = isEmptyString ? defaultSelectorData : getShortInfo(trimmedLine);

    const lineData: LineDataType = {
        lineIndex,
        spaceCount,
        selector,
        line: isEmptyString ? emptyString : line,
        trimmedLine,
        lineContent,
        childList: [],
        additionalLineList: [],
    };

    if (selectorCodeList.includes(selector)) {
        if (documentMeta.codeLineData && lineContent === emptyString) {
            // eslint-disable-next-line no-param-reassign
            documentMeta.codeLineData = null;
            return;
        }
        // eslint-disable-next-line no-param-reassign
        documentMeta.codeLineData = lineData;
    }

    const {codeLineData} = documentMeta;

    if (codeLineData && codeLineData !== lineData) {
        codeLineData.additionalLineList.push(lineData.line);
        return;
    }

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
