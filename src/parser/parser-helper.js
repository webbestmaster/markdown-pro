// @flow

import type {LineDataType} from './parser-type';
import {emptyString, selectorHeaderList} from './parser-const';

export function cleanLine(line: string): string {
    return line.trim().replace(/\s+/g, ' ');
}

export function getParent(lineData: LineDataType, lineDataList: Array<LineDataType>): LineDataType {
    const linaDataListLength = lineDataList.length;

    // eslint-disable-next-line no-loops/no-loops
    for (let lineDataIndex = linaDataListLength - 1; lineDataIndex >= 0; lineDataIndex -= 1) {
        const lineDataCandidate = lineDataList[lineDataIndex];

        if (lineDataCandidate.spaceCount < lineData.spaceCount) {
            return lineDataCandidate;
        }
    }

    console.error('No way!');

    console.log(lineData);

    return lineData;
}

export function isHeader(lineData: LineDataType): boolean {
    return selectorHeaderList.includes(lineData.selector);
}
