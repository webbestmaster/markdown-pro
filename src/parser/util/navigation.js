// @flow

import type {LineDataType} from '../parser-type';
import {emptyString} from '../parser-const';

// eslint-disable-next-line complexity
function searchSiblingItem(
    lineData: LineDataType,
    lineDataList: Array<LineDataType>,
    direction: number
): LineDataType | null {
    const index = lineDataList.indexOf(lineData);

    if (index === -1) {
        return null;
    }

    const siblingIndex = index + direction;

    const siblingItem = siblingIndex in lineDataList ? lineDataList[siblingIndex] : null;

    if (!siblingItem) {
        return null;
    }

    if (siblingItem.trimmedLine === emptyString) {
        const newDirection = direction + (direction >= 0 ? 1 : -1);

        return searchSiblingItem(lineData, lineDataList, newDirection);
    }

    return siblingItem;
}

export function getIsEdgeLine(lineData: LineDataType, lineDataList: Array<LineDataType>, direction: number): boolean {
    const {selector} = lineData;
    const foundItem = searchSiblingItem(lineData, lineDataList, direction);

    return !foundItem || foundItem.selector !== selector;
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
