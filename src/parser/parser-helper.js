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

export function renderChildList(lineDataList: Array<LineDataType>): string {
    return lineDataList.map(renderLineData).join(emptyString);
}

// eslint-disable-next-line complexity
export function renderLineData(
    lineData: LineDataType,
    lineDataIndex: number,
    lineDataList: Array<LineDataType>
): string {
    const {selector, childList, trimmedLine} = lineData;

    if (trimmedLine === emptyString && childList.length === 0) {
        return emptyString;
    }

    const isHeader = getIsHeader(lineData);
    const isUlItem = getIsUlItem(lineData);

    if (isHeader) {
        const headerTag = selector.length - 1;

        return `
            <h${headerTag} data-selector="${selector}">
            ${trimmedLine}
            ${renderChildList(childList)}
            </h${headerTag}>
        `;
    }

    if (isUlItem) {
        const prevItem = lineDataIndex === 0 ? null : lineDataList[lineDataIndex - 1];
        const isFirstItem = !prevItem || !getIsUlItem(prevItem);
        const nextItem = lineDataIndex === lineDataList.length - 1 ? null : lineDataList[lineDataIndex + 1];
        const isLastItem = !nextItem || !getIsUlItem(nextItem);

        return `
            ${isFirstItem ? '<ul>' : ''}
            <li data-selector="${selector}">
            ${trimmedLine}
            ${renderChildList(childList)}
            </li>
            ${isLastItem ? '</ul>' : ''}
        `;
    }

    if (trimmedLine === emptyString) {
        return renderChildList(childList);
    }

    return `<p>${trimmedLine}${renderChildList(childList)}</p>`;
}
