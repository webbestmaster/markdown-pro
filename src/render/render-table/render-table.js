// @flow

import type {LineDataType} from '../../parser/parser-type';
import {filterEmptyString, isTableDivideLine} from '../../parser/util/string';
import {renderAdditionalLineList} from '../render-helper';
import {emptyString} from '../render-const';

import {getAlignList} from './render-table-helper';
import {cellAlignTypeMap, cellTagNameTypeMap} from './render-table-const';
import type {CellAlignType, CellTagNameType} from './render-table-type';

export function renderTable(lineData: LineDataType): string {
    const {selector, lineContent, additionalLineList, line} = lineData;

    const lineList = [line, ...additionalLineList];

    const dividerLine = lineList.find(isTableDivideLine);

    if (!dividerLine) {
        return `<p>${lineContent}${renderAdditionalLineList(lineData)}</p>`;
    }

    const dividerLineIndex = lineList.indexOf(dividerLine);
    const headLineList = lineList.slice(0, dividerLineIndex);
    const bodyLineList = lineList.slice(dividerLineIndex + 1);
    const alignList = getAlignList(selector, dividerLine);

    const headContent = renderTableRowList(lineData, headLineList, alignList, cellTagNameTypeMap.thCell);
    const bodyContent = renderTableRowList(lineData, bodyLineList, alignList, cellTagNameTypeMap.tdCell);

    return `<table><thead>${headContent}</thead><tbody>${bodyContent}</tbody></table>`;
}

function renderTableRowList(
    lineData: LineDataType,
    lineList: Array<string>,
    alignList: Array<CellAlignType>,
    cellName: CellTagNameType
): string {
    return lineList
        .map((line: string): string => `<tr>${renderTableRow(lineData, line, alignList, cellName)}</tr>`)
        .join(emptyString);
}

function renderTableRow(
    lineData: LineDataType,
    line: string,
    alignList: Array<CellAlignType>,
    cellName: CellTagNameType
): string {
    const {selector} = lineData;

    return line
        .split(selector)
        .filter(filterEmptyString)
        .map((cellContent: string, cellIndex: number): string => {
            const align = alignList[cellIndex] || cellAlignTypeMap.default;

            return `<${cellName} align="${align}">${cellContent}</${cellName}>`;
        })
        .join(emptyString);
}
