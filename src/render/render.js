// @flow

import type {LineDataType, OlAttributeType, SelectorType} from '../parser/parser-type';
import {emptyString, olNumericType, oLParseDataList, space} from '../parser/parser-const';
import {getIsBlockquote, getIsCode, getIsHeader, getIsLine, getIsOlItem, getIsUlItem} from '../parser/util/is-tag';
import {getIsEdgeLine} from '../parser/util/navigation';

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
    const {selector, childList, lineContent, additionalLineList, trimmedLine} = lineData;
    const additionLineListRender = renderAdditionalLineList(additionalLineList);
    const childListRender = renderChildList(childList);

    if (getIsLine(lineData)) {
        return '<hr/>';
    }

    if (lineContent === emptyString && childList.length === 0) {
        return emptyString;
    }

    if (getIsCode(lineData)) {
        return `<code lang="${lineContent}">${additionalLineList.join('\n')}</code>`;
    }

    if (getIsHeader(lineData)) {
        const headerTag = selector.length - 1;

        return `<h${headerTag}>${lineContent}${additionLineListRender}${childListRender}</h${headerTag}>`;
    }

    if (getIsBlockquote(lineData)) {
        return `<blockquote>${lineContent}${additionLineListRender}${childListRender}</blockquote>`;
    }

    if (getIsUlItem(lineData)) {
        const isFirstItem = getIsEdgeLine(lineData, lineDataList, -1);
        const isLastItem = getIsEdgeLine(lineData, lineDataList, 1);
        const prefix = isFirstItem ? '<ul>' : '';
        const postfix = isLastItem ? '</ul>' : '';

        return `${prefix}<li>${lineContent}${additionLineListRender}${childListRender}</li>${postfix}`;
    }

    if (getIsOlItem(lineData)) {
        const isFirstItem = getIsEdgeLine(lineData, lineDataList, -1);
        const isLastItem = getIsEdgeLine(lineData, lineDataList, 1);
        const prefix = isFirstItem ? `<ol type="${getOlTypeBySelector(lineData.selector)}">` : '';
        const postfix = isLastItem ? '</ol>' : '';

        return `${prefix}<li>${lineContent}${additionLineListRender}${childListRender}</li>${postfix}`;
    }

    if (lineContent === emptyString) {
        return `${lineContent}${additionLineListRender}${childListRender}`;
    }

    return `<p>${lineContent}${additionLineListRender}${childListRender}</p>`;
}
