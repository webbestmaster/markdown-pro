import { oLParseDataList, selectorBlockquoteList, selectorCodeList, selectorHeaderList, selectorLineList, selectorTableList, selectorULItemList, } from "../parser-selector";
export function getIsHeader(lineData) {
    return selectorHeaderList.includes(lineData.selector);
}
export function getIsUlItem(lineData) {
    return selectorULItemList.includes(lineData.selector);
}
export function getIsOlItem(lineData) {
    for (const oLParseData of oLParseDataList) {
        if (oLParseData.selector === lineData.selector) {
            return true;
        }
    }
    return false;
}
export function getIsLine(lineData) {
    return selectorLineList.includes(lineData.selector);
}
export function getIsTable(lineData) {
    return selectorTableList.includes(lineData.selector);
}
export function getIsCode(lineData) {
    return selectorCodeList.includes(lineData.selector);
}
export function getIsBlockquote(lineData) {
    return selectorBlockquoteList.includes(lineData.selector);
}
const htmlPairTag = /<(\w+)[^>]*>[\S\s]*?<\/\1>/u;
const htmlSingleTag = /<\w+[^>]*?\s*\/>/u;
export function getIsStartWithHtml(lineData) {
    const { trimmedLine } = lineData;
    return trimmedLine.search(htmlPairTag) === 0 || trimmedLine.search(htmlSingleTag) === 0;
}
//# sourceMappingURL=is-tag.js.map