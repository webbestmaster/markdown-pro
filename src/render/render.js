// @flow

import type {LineDataType, OlAttributeType, SelectorType} from '../parser/parser-type';
import {breakLineTag, emptyString, olNumericType, oLParseDataList, space} from '../parser/parser-const';
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
import {
    addBreakLine,
    breakLineRegExp,
    getHasEndBreakLine,
    isImageListOnly,
    makeImage,
    makeLink,
    removeEndBreakLine,
} from '../parser/util/string';

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

// eslint-disable-next-line complexity
function renderAdditionalLineList(lineData: LineDataType): string {
    const {additionalLineList, useLineBreak} = lineData;

    if (additionalLineList.length === 0) {
        return emptyString;
    }

    const hasParentEndBreakLine = getHasEndBreakLine(lineData.lineContent, useLineBreak);
    const prefix = hasParentEndBreakLine ? breakLineTag : space;
    const additionalLineListLength = additionalLineList.length;
    const additionalLineLastIndex = additionalLineListLength - 1;
    const lineResult: Array<string> = new Array<string>(additionalLineListLength).fill('');

    // eslint-disable-next-line no-loops/no-loops
    for (let lineIndex = 0; lineIndex < additionalLineListLength; lineIndex += 1) {
        const additionalLine = additionalLineList[lineIndex];
        const hasBreakLine = getHasEndBreakLine(additionalLine, useLineBreak);

        if (hasBreakLine) {
            const additionalLineWithoutBreakLine = additionalLine.replace(breakLineRegExp, emptyString);

            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLineWithoutBreakLine;
            } else {
                lineResult[lineIndex] = additionalLineWithoutBreakLine + breakLineTag;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLine;
            } else {
                lineResult[lineIndex] = additionalLine + space;
            }
        }
    }

    return prefix + lineResult.join(emptyString);
}

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity, max-statements
export function renderLineData(
    lineData: LineDataType,
    lineDataIndex: number,
    lineDataList: Array<LineDataType>
): string {
    const {selector, childList, lineContent, additionalLineList, trimmedLine} = lineData;
    const additionLineListRender = renderAdditionalLineList(lineData);
    const childListRender = renderChildList(childList);

    let fullLineContent = `${removeEndBreakLine(lineContent)}${additionLineListRender}${childListRender}`;

    fullLineContent = makeImage(fullLineContent);
    fullLineContent = makeLink(fullLineContent);

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

    if (lineContent === emptyString || getIsStartWithHtml(lineData) || isImageListOnly(lineContent)) {
        return fullLineContent;
    }

    return `<p>${fullLineContent}</p>`;
}
