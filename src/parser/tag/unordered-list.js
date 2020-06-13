/*
// @flow

import type {LineDataType} from '../parser-type';
import {selectorULItemList} from '../parser-const';

type LineDataListItemType = {|
    lineData: LineDataType,
|};

function isFirstItem(lineData: LineDataType, lineIndex: number, array: Array<LineDataType>): boolean {
    if (lineIndex === 0) {
        return true;
    }

    const prevItem = array[lineIndex - 1];

    if (!prevItem) {
        return true;
    }

    if (!isUlItem(prevItem)) {
        return true;
    }

    return prevItem.spaceCount !== lineData.spaceCount;
}

function isUlItem(lineData: LineDataType): boolean {
    return selectorULItemList.includes(lineData.selector);
}

export function groupUl(lineDataList: Array<LineDataType>): Array<LineDataType> {
    const resultLineDataList: Array<LineDataType> = [];

    const firstUlItemList: Array<LineDataType> = [];

    lineDataList.forEach((lineData: LineDataType, lineIndex: number, array: Array<LineDataType>) => {
        if (!isUlItem(lineData)) {
            resultLineDataList.push(lineData);
            return;
        }

        if (isFirstItem(lineData, lineIndex, array)) {
            console.log(lineData.line);
        }
    });

    return resultLineDataList;
}
*/
