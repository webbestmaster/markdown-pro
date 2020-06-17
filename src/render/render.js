// @flow

import type {LineDataType, OlAttributeType, SelectorType} from '../parser/parser-type';
import {emptyString, olNumericType, oLParseDataList, space} from '../parser/parser-const';
import {
    getIsBlockquote,
    getIsCode,
    getIsHeader,
    getIsLine,
    getIsOlItem,
    getIsStartWithHtml,
    getIsUlItem,
} from '../parser/util/is-tag';
import {getIsEdgeLine} from '../parser/util/navigation';
import {addBreakLine} from '../parser/util/string';

function getOlTypeBySelector(dataLineSelector: SelectorType): OlAttributeType {
    // eslint-disable-next-line no-loops/no-loops
    for (const oLParseData of oLParseDataList) {
        const {selector, olAttributeType} = oLParseData;

        if (dataLineSelector === selector) {
            return olAttributeType;
        }
    }

    console.error('Can not detect ol type by selector', dataLineSelector);

    return olNumericType;
}

function getOlStart(trimmedLine: string): string {
    const dotIndex = trimmedLine.indexOf('.');

    return trimmedLine.slice(0, dotIndex);
}

export function renderChildList(lineDataList: Array<LineDataType>): string {
    return lineDataList.map(renderLineData).map(addBreakLine).join(emptyString);
}

export function renderAdditionalLineList(lineContentList: Array<string>): string {
    if (lineContentList.length === 0) {
        return emptyString;
    }

    return space + lineContentList.map(addBreakLine).join(space);
}

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity, max-statements
export function renderLineData(
    lineData: LineDataType,
    lineDataIndex: number,
    lineDataList: Array<LineDataType>
): string {
    const {selector, childList, lineContent, additionalLineList, trimmedLine} = lineData;
    const additionLineListRender = renderAdditionalLineList(additionalLineList);
    const childListRender = renderChildList(childList);
    const fullLineContent = `${addBreakLine(lineContent)}${additionLineListRender}${childListRender}`;

    if (getIsLine(lineData)) {
        return '<hr/>';
    }

    if (getIsCode(lineData)) {
        return `<code lang="${lineContent}">${additionalLineList.join('\n')}</code>`;
    }

    if (lineContent === emptyString && childList.length === 0) {
        return emptyString;
    }

    if (getIsHeader(lineData)) {
        const headerTag = selector.length - 1;

        return `<h${headerTag}>${fullLineContent}</h${headerTag}>`;
    }

    if (getIsBlockquote(lineData)) {
        return `<blockquote>${fullLineContent}</blockquote>`;
    }

    if (getIsUlItem(lineData)) {
        const isFirstItem = getIsEdgeLine(lineData, lineDataList, -1);
        const isLastItem = getIsEdgeLine(lineData, lineDataList, 1);
        const prefix = isFirstItem ? '<ul>' : '';
        const postfix = isLastItem ? '</ul>' : '';

        return `${prefix}<li>${fullLineContent}</li>${postfix}`;
    }

    if (getIsOlItem(lineData)) {
        const isFirstItem = getIsEdgeLine(lineData, lineDataList, -1);
        const isLastItem = getIsEdgeLine(lineData, lineDataList, 1);
        const prefix = isFirstItem
            ? `<ol type="${getOlTypeBySelector(lineData.selector)}" start="${getOlStart(trimmedLine)}">`
            : '';
        const postfix = isLastItem ? '</ol>' : '';

        return `${prefix}<li>${fullLineContent}</li>${postfix}`;
    }

    if (lineContent === emptyString || getIsStartWithHtml(lineData)) {
        return fullLineContent;
    }

    return `<p>${fullLineContent}</p>`;
}
