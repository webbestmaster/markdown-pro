// @flow

import type {LineDataType} from '../../parser/parser-type';
import {filterEmptyString} from '../../parser/util/string';
import {renderAdditionalLineList} from '../render-helper';
import {emptyString} from '../render-const';

import {getAlignList, isTableDivideLine} from './render-table-helper';
import {cellAlignTypeMap, cellTagNameTypeMap} from './render-table-const';
import type {CellAlignType, CellTagNameType, RenderLineDataType} from './render-table-type';
// import {makeLinkFromText} from '../render-link'
// import {makePairTag} from '../render-pair-tag'
// import {renderChildList} from '../render'

// function renderTableCell(lineData: LineDataType, line: string): string {
//     const {selector, childList, lineContent, trimmedLine, additionalLineList, config} = lineData;
//     const {codeHighlight, parseLink} = config;
//     const additionLineListRender = renderAdditionalLineList(lineData);
//     const childListRender = renderChildList(childList);
//
//     let fullLineContent = removeEndBreakLine(lineContent) + additionLineListRender;
//
//     fullLineContent = makeImage(fullLineContent);
//     fullLineContent = makeLink(fullLineContent);
//     if (parseLink) {
//         fullLineContent = makeLinkFromText(fullLineContent);
//     }
//     fullLineContent = makeCheckbox(fullLineContent);
//     fullLineContent = makePairTag(fullLineContent);
//     fullLineContent += childListRender;
//
// }


export function renderTable(lineData: LineDataType, renderLineData: RenderLineDataType<LineDataType>): string {
    const {selector, lineContent, additionalLineList, line} = lineData;

    const lineList = [line, ...additionalLineList];

    const dividerLine = lineList.find(isTableDivideLine);

    if (!dividerLine) {
        return renderLineData({
            ...lineData,
            selector: '',
            lineContent: selector +' '+ lineContent,
        }, 0, []);
    }

    const dividerLineIndex = lineList.indexOf(dividerLine);
    const headLineList = lineList.slice(0, dividerLineIndex);
    const bodyLineList = lineList.slice(dividerLineIndex + 1);
    const alignList = getAlignList(selector, dividerLine);

    const headContent = renderTableRowList(lineData, headLineList, alignList, renderLineData, cellTagNameTypeMap.thCell);
    const bodyContent = renderTableRowList(lineData, bodyLineList, alignList, renderLineData, cellTagNameTypeMap.tdCell);

    return `<table><thead>${headContent}</thead><tbody>${bodyContent}</tbody></table>`;
}

function renderTableRowList(
    lineData: LineDataType,
    lineList: Array<string>,
    alignList: Array<CellAlignType>,
    renderLineData: mixed,
    cellName: CellTagNameType
): string {
    return lineList
        .map((line: string): string => `<tr>${renderTableRow(lineData, line, alignList, renderLineData, cellName)}</tr>`)
        .join(emptyString);
}

function renderTableRow(
    lineData: LineDataType,
    line: string,
    alignList: Array<CellAlignType>,
    renderLineData: mixed,
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
