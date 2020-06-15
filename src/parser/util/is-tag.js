// @flow

import type {LineDataType} from '../parser-type';
import {
    oLParseDataList,
    selectorBlockquoteList,
    selectorHeaderList,
    selectorLineList,
    selectorULItemList,
} from '../parser-const';

export function getIsHeader(lineData: LineDataType): boolean {
    return selectorHeaderList.includes(lineData.selector);
}

export function getIsUlItem(lineData: LineDataType): boolean {
    return selectorULItemList.includes(lineData.selector);
}

export function getIsOlItem(lineData: LineDataType): boolean {
    // eslint-disable-next-line no-loops/no-loops
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

export function getIsBlockquote(lineData: LineDataType): boolean {
    return selectorBlockquoteList.includes(lineData.selector);
}
