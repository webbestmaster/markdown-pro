import {emptyString} from '../render/render-const';

import {cleanLine, getIsAllSymbolsEqual} from './util/string';
import {getParent} from './util/navigation';
import {DocumentMetaType, LineDataType, ShortLineInfoType} from './parser-type';
import {oLParseDataList, selectorCodeList, selectorLineList, selectorList, selectorTableList} from './parser-selector';
import {addLineData, fromToFootnoteList, getFootnoteList} from './footnote/footnote';
import {getIsFootnoteDescription} from './footnote/footnote-helper';
import {getVariableData} from './util/variable';

// eslint-disable-next-line complexity
function getShortInfo(trimmedLine: string): ShortLineInfoType {
    // eslint-disable-next-line no-loops/no-loops
    for (const selector of selectorList) {
        if (trimmedLine.startsWith(selector)) {
            return {
                lineContent: cleanLine(trimmedLine.replace(selector, emptyString)),
                selector,
            };
        }
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const lineSelector of selectorLineList) {
        if (trimmedLine.startsWith(lineSelector) && getIsAllSymbolsEqual(trimmedLine)) {
            return {
                lineContent: emptyString,
                selector: lineSelector,
            };
        }
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const oLParseData of oLParseDataList) {
        const {selector, regExpSearchSelector} = oLParseData;

        if (trimmedLine.search(regExpSearchSelector) === 0) {
            return {
                lineContent: cleanLine(trimmedLine.replace(regExpSearchSelector, emptyString)),
                selector,
            };
        }
    }

    return {
        lineContent: cleanLine(trimmedLine),
        selector: emptyString,
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
    const spaceCount = Math.max(0, rawSpaceCount);
    const defaultSelectorData: ShortLineInfoType = {
        lineContent: emptyString,
        selector: emptyString,
    };

    const {selector, lineContent} = isEmptyString ? defaultSelectorData : getShortInfo(trimmedLine);

    const lineData: LineDataType = {
        additionalLineList: [],
        childList: [],
        config: documentMeta.config,
        line: isEmptyString ? emptyString : line,
        lineContent,
        lineIndex,
        selector,
        spaceCount,
        trimmedLine,
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

    const newFootnoteList = getFootnoteList(lineContent);
    const {footnoteList, tableLineData, variable} = documentMeta;

    fromToFootnoteList(newFootnoteList, footnoteList);

    if (selectorTableList.includes(selector)) {
        if (tableLineData) {
            // append new line in current block
            // eslint-disable-next-line no-param-reassign
            tableLineData.additionalLineList.push(lineData.line);
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

    const variableData = getVariableData(lineContent);

    if (lineData.selector === emptyString && lineContent.length > 0) {
        const prevItemIndex = savedLineDataList.length - 1;
        const prevItem = savedLineDataList[prevItemIndex];
        const isTable = selectorTableList.includes(prevItem.selector);

        if (variableData) {
            // eslint-disable-next-line no-param-reassign
            variable[variableData.key] = variableData;
        }

        if (prevItem && prevItem.lineContent.length > 0 && !isTable && !variableData) {
            prevItem.additionalLineList.push(lineContent);
            return true;
        }
    }

    const parentLineData = getParent(lineData, savedLineDataList);

    if (!parentLineData) {
        // console.error('Parent not found');
        return false;
    }

    if (variableData) {
        return true;
    }

    parentLineData.childList.push(lineData);
    savedLineDataList.push(lineData);

    if (getIsFootnoteDescription(lineContent)) {
        addLineData(lineData, footnoteList);
    }

    return true;
}
