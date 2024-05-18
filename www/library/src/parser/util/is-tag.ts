import type {LineDataType} from "../parser-type";
import {
    oLParseDataList,
    selectorBlockquoteList,
    selectorCodeList,
    selectorHeaderList,
    selectorLineList,
    selectorTableList,
    selectorULItemList,
} from "../parser-selector";

export function getIsHeader(lineData: LineDataType): boolean {
    return selectorHeaderList.includes(lineData.selector);
}

export function getIsUlItem(lineData: LineDataType): boolean {
    return selectorULItemList.includes(lineData.selector);
}

export function getIsOlItem(lineData: LineDataType): boolean {
    for (const oLParseData of oLParseDataList) {
        if (oLParseData.selector === lineData.selector) {
            return true;
        }
    }

    return false;
}

export function getIsLine(lineData: LineDataType): boolean {
    return selectorLineList.includes(lineData.selector);
}

export function getIsTable(lineData: LineDataType): boolean {
    return selectorTableList.includes(lineData.selector);
}

export function getIsCode(lineData: LineDataType): boolean {
    return selectorCodeList.includes(lineData.selector);
}

export function getIsBlockquote(lineData: LineDataType): boolean {
    return selectorBlockquoteList.includes(lineData.selector);
}

const htmlPairTag = /<(\w+)[^>]*>[\S\s]*?<\/\1>/u;
const htmlSingleTag = /<\w+[^>]*?\s*\/>/u;

export function getIsStartWithHtml(lineData: LineDataType): boolean {
    const {trimmedLine} = lineData;

    return trimmedLine.search(htmlPairTag) === 0 || trimmedLine.search(htmlSingleTag) === 0;
}
