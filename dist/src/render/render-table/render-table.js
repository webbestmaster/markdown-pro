import { filterEmptyString } from '../../parser/util/string';
import { emptyString } from '../render-const';
import { getAlignList, isTableDivideLine, renderTableCellContent } from './render-table-helper';
import { cellAlignTypeMap, cellTagNameTypeMap } from './render-table-const';
function renderTableRow(lineData, line, alignList, cellName, documentMeta) {
    const { selector } = lineData;
    return line
        .split(selector)
        .filter(filterEmptyString)
        .map((cellContent, cellIndex) => {
        const align = alignList[cellIndex] || cellAlignTypeMap.default;
        return `<${cellName} align="${align}">${renderTableCellContent(cellContent, documentMeta)}</${cellName}>`;
    })
        .join(emptyString);
}
function renderTableRowList(lineData, lineList, alignList, cellName, documentMeta) {
    return lineList
        .map((line) => `<tr>${renderTableRow(lineData, line, alignList, cellName, documentMeta)}</tr>`)
        .join(emptyString);
}
export function renderTable(lineData, documentMeta) {
    const { selector, additionalLineList, line } = lineData;
    const lineList = [line, ...additionalLineList];
    const dividerLine = lineList.find(isTableDivideLine);
    if (!dividerLine) {
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
//# sourceMappingURL=render-table.js.map