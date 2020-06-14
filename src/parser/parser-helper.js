// @flow

import type {LineDataType} from './parser-type';
import {emptyString, olNumericItemSelector, selectorHeaderList, selectorULItemList, space} from './parser-const';

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

export function getIsOlItem(lineData: LineDataType): boolean {
    return olNumericItemSelector === lineData.selector;
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

export function renderAdditionalLineList(lineContentList: Array<string>): string {
    if (lineContentList.length === 0) {
        return emptyString;
    }

    return space + lineContentList.join(space);
}

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity, max-statements
export function renderLineData(
    lineData: LineDataType,
    lineDataIndex: number,
    lineDataList: Array<LineDataType>
): string {
    const {selector, childList, lineContent, additionalLineList} = lineData;
    const additionLineListRender = renderAdditionalLineList(additionalLineList);
    const childListRender = renderChildList(childList);

    if (lineContent === emptyString && childList.length === 0) {
        return emptyString;
    }

    const isHeader = getIsHeader(lineData);
    const isUlItem = getIsUlItem(lineData);
    const isOlItem = getIsOlItem(lineData);

    if (isHeader) {
        const headerTag = selector.length - 1;

        return `<h${headerTag}>${lineContent}${additionLineListRender}${childListRender}</h${headerTag}>`;
    }

    if (isUlItem) {
        // TODO: refactor ul and ol together
        const prevItem = getSiblingItem(lineData, lineDataList, -1);
        const isFirstItem = !prevItem || prevItem.selector !== selector;
        const nextItem = getSiblingItem(lineData, lineDataList, 1);
        const isLastItem = !nextItem || nextItem.selector !== selector;

        const prefix = isFirstItem ? '<ul>' : '';
        const postfix = isLastItem ? '</ul>' : '';

        return `${prefix}<li>${lineContent}${additionLineListRender}${childListRender}</li>${postfix}`;
    }

    if (isOlItem) {
        // TODO: refactor ul and ol together
        const prevItem = getSiblingItem(lineData, lineDataList, -1);
        const isFirstItem = !prevItem || prevItem.selector !== selector;
        const nextItem = getSiblingItem(lineData, lineDataList, 1);
        const isLastItem = !nextItem || nextItem.selector !== selector;

        const prefix = isFirstItem ? '<ol>' : '';
        const postfix = isLastItem ? '</ol>' : '';

        return `${prefix}<li>${lineContent}${additionLineListRender}${childListRender}</li>${postfix}`;
    }

    if (lineContent === emptyString) {
        return additionLineListRender + childListRender;
    }

    return `<p>${lineContent}${additionLineListRender}${childListRender}</p>`;
}
