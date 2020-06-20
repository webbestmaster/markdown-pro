// @flow

import {type LineDataType} from '../parser/parser-type';
import {
    getIsBlockquote,
    getIsCode,
    getIsHeader,
    getIsLine,
    getIsOlItem,
    getIsStartWithHtml,
    getIsUlItem,
} from '../parser/util/is-tag';
import {emptyString} from '../parser/parser-const';
import {getIsEdgeLine} from '../parser/util/navigation';

import {
    addBreakLine,
    getOlStart,
    getOlTypeBySelector,
    isImageListOnly,
    makeImage,
    makeLink,
    removeEndBreakLine,
    renderAdditionalLineList,
} from './render-helper';
import {makePairTag} from './render-pair-tag';

export function renderChildList(lineDataList: Array<LineDataType>): string {
    return lineDataList.map(renderLineData).map(addBreakLine).join(emptyString);
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

    let fullLineContent = removeEndBreakLine(lineContent) + additionLineListRender;

    fullLineContent = makeImage(fullLineContent);
    fullLineContent = makeLink(fullLineContent);
    fullLineContent = makePairTag(fullLineContent);
    fullLineContent += childListRender;

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
