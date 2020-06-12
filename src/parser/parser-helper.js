// @flow

import type {LineDataType} from './parser-type';
import {emptyString, selectorHeaderList, selectorULItemList} from './parser-const';

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

export function getIsHeader(lineData: LineDataType): boolean {
    return selectorHeaderList.includes(lineData.selector);
}

export function getIsUlItem(lineData: LineDataType): boolean {
    return selectorULItemList.includes(lineData.selector);
}

// eslint-disable-next-line complexity
function getSiblingItem(
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

        return getSiblingItem(lineData, lineDataList, newDirection);
    }

    return siblingItem;
}

export function renderChildList(lineDataList: Array<LineDataType>): string {
    return lineDataList.map(renderLineData).join(emptyString);
}

// eslint-disable-next-line complexity
export function renderLineData(
    lineData: LineDataType,
    lineDataIndex: number,
    lineDataList: Array<LineDataType>
): string {
    const {selector, childList, lineContent} = lineData;

    if (lineContent === emptyString && childList.length === 0) {
        return emptyString;
    }

    const isHeader = getIsHeader(lineData);
    const isUlItem = getIsUlItem(lineData);

    if (isHeader) {
        const headerTag = selector.length - 1;

        return `<h${headerTag} data-selector="${selector}">${lineContent}${renderChildList(childList)}</h${headerTag}>`;
    }

    if (isUlItem) {
        const prevItem = getSiblingItem(lineData, lineDataList, -1);
        const isFirstItem = !prevItem || !getIsUlItem(prevItem);
        const nextItem = getSiblingItem(lineData, lineDataList, 1);
        const isLastItem = !nextItem || !getIsUlItem(nextItem);

        const prefix = isFirstItem ? '<ul>' : '';
        const postfix = isLastItem ? '</ul>' : '';

        return `${prefix}<li data-selector="${selector}">${lineContent}${renderChildList(childList)}</li>${postfix}`;
    }

    if (lineContent === emptyString) {
        return renderChildList(childList);
    }

    return `<p>${lineContent}${renderChildList(childList)}</p>`;
}
