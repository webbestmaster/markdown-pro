// @flow

import {emptyString} from '../render/render-const';

import {cleanLine, getIsAllSymbolsEqual} from './util/string';
import {getParent} from './util/navigation';
import type {DocumentMetaType, LineDataType, ShortLineInfoType} from './parser-type';
import {oLParseDataList, selectorCodeList, selectorLineList, selectorList, selectorTableList} from './parser-selector';

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
): boolean {
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
        config: documentMeta.config,
    };

    if (selectorCodeList.includes(selector)) {
        if (documentMeta.codeLineData && lineContent === emptyString) {
            // eslint-disable-next-line no-param-reassign
            documentMeta.codeLineData = null;
            return true;
        }
        // eslint-disable-next-line no-param-reassign
        documentMeta.codeLineData = lineData;
    }

    const {codeLineData} = documentMeta;

    if (codeLineData && codeLineData !== lineData) {
        codeLineData.additionalLineList.push(lineData.line);
        return true;
    }

    if (selectorTableList.includes(selector)) {
        if (documentMeta.tableLineData) {
            // append new line in current block
            // eslint-disable-next-line no-param-reassign
            documentMeta.tableLineData.additionalLineList.push(lineData.line);
            return true;
        }
        // create new block
        // eslint-disable-next-line no-param-reassign
        documentMeta.tableLineData = lineData;
    } else {
        // close table block
        // eslint-disable-next-line no-param-reassign
        documentMeta.tableLineData = null;
    }

    if (lineData.selector === emptyString && lineContent.length > 0) {
        const prevItemIndex = savedLineDataList.length - 1;
        const prevItem = savedLineDataList[prevItemIndex];

        if (prevItem && prevItem.lineContent.length > 0) {
            prevItem.additionalLineList.push(lineContent);
            return true;
        }
    }

    const parentLineData = getParent(lineData, savedLineDataList);

    if (!parentLineData) {
        // this string should not be test covered
        console.error('Parent not found');
        return false;
    }

    parentLineData.childList.push(lineData);
    savedLineDataList.push(lineData);

    return true;
}
