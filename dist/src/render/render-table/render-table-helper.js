import { filterEmptyString } from "../../parser/util/string";
import { emptyString } from "../render-const";
import { renderInlineHtml } from "../render-helper";
import { cellAlignTypeMap } from "./render-table-const";
export function renderTableCellContent(line, documentMeta) {
    return renderInlineHtml(line, documentMeta).trim();
}
export function isTableDivideLine(line) {
    return line.replace(/[\s:|-]/gu, "") === emptyString;
}
export function lineToAlign(divideRaw) {
    const alignMark = ":";
    const divide = divideRaw.trim();
    const divideCharList = divide.split("");
    const [firstChar] = divideCharList;
    const lastChar = divide[divide.length - 1];
    if (firstChar === lastChar && firstChar === alignMark) {
        return cellAlignTypeMap.center;
    }
    if (lastChar === alignMark) {
        return cellAlignTypeMap.right;
    }
    return cellAlignTypeMap.left;
}
export function getAlignList(selector, divideLine) {
    return divideLine.split(selector).filter(filterEmptyString).map(lineToAlign);
}
//# sourceMappingURL=render-table-helper.js.map