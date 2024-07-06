import type {DocumentMetaType, LineDataType} from "../../parser/parser-type";
import {filterEmptyString} from "../../parser/util/string";
import {emptyString} from "../render-const";
import {cellAlignTypeMap, cellTagNameTypeMap} from "./render-table-const";
import {getAlignList, isTableDivideLine, renderTableCellContent} from "./render-table-helper";
import type {CellAlignType, CellTagNameType} from "./render-table-type";

// eslint-disable-next-line @typescript-eslint/max-params
function renderTableRow(
    lineData: LineDataType,
    line: string,
    alignList: Array<CellAlignType>,
    cellName: CellTagNameType,
    documentMeta: DocumentMetaType
): string {
    const {selector} = lineData;

    return line
        .split(selector)
        .filter(filterEmptyString)
        .map((cellContent: string, cellIndex: number): string => {
            const align = alignList[cellIndex] || cellAlignTypeMap.default;

            return `<${cellName} align="${align}">${renderTableCellContent(cellContent, documentMeta)}</${cellName}>`;
        })
        .join(emptyString);
}

// eslint-disable-next-line @typescript-eslint/max-params
function renderTableRowList(
    lineData: LineDataType,
    lineList: Array<string>,
    alignList: Array<CellAlignType>,
    cellName: CellTagNameType,
    documentMeta: DocumentMetaType
): string {
    return lineList
        .map((line: string): string => {
            return `<tr>${renderTableRow(lineData, line, alignList, cellName, documentMeta)}</tr>`;
        })
        .join(emptyString);
}

export function renderTable(lineData: LineDataType, documentMeta: DocumentMetaType): string {
    const {selector, additionalLineList, line} = lineData;

    const lineList = [line, ...additionalLineList];

    const dividerLine = lineList.find(isTableDivideLine);

    // eslint-disable-next-line no-undefined
    if (dividerLine === undefined) {
        const bodyOnlyContent = renderTableRowList(lineData, lineList, [], cellTagNameTypeMap.tdCell, documentMeta);

        return `<table><tbody>${bodyOnlyContent}</tbody></table>`;
    }

    const dividerLineIndex = lineList.indexOf(dividerLine);
    const headLineList = lineList.slice(0, dividerLineIndex);
    const bodyLineList = lineList.slice(dividerLineIndex + 1);
    const alignList = getAlignList(selector, dividerLine);

    const headContent = renderTableRowList(lineData, headLineList, alignList, cellTagNameTypeMap.thCell, documentMeta);
    const bodyContent = renderTableRowList(lineData, bodyLineList, alignList, cellTagNameTypeMap.tdCell, documentMeta);

    return `<table><thead>${headContent}</thead><tbody>${bodyContent}</tbody></table>`;
}
