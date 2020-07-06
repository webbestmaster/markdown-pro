// @flow

import {type LineDataType} from '../parser/parser-type';
import {
    getIsBlockquote,
    getIsCode,
    getIsHeader,
    getIsLine,
    getIsOlItem,
    getIsStartWithHtml,
    getIsTable,
    getIsUlItem,
} from '../parser/util/is-tag';

import {getIsEdgeLine} from '../parser/util/navigation';

import {emptyString} from './render-const';

import {
    addBreakLine,
    getOlStart,
    getOlTypeBySelector,
    isImageListOnly,
    makeCheckbox,
    makeImage,
    makeLink,
    removeEndBreakLine,
    renderAdditionalLineList,
} from './render-helper';
import {makeLinkFromText} from './render-link';
import {makePairTag} from './render-pair-tag';
import {renderTable} from './render-table/render-table';

export function renderChildList(lineDataList: Array<LineDataType>): string {
    return lineDataList.map(renderLineData).map(addBreakLine).join(emptyString);
}

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity, max-statements
export function renderLineData(
    lineData: LineDataType,
    lineDataIndex: number,
    lineDataList: Array<LineDataType>
): string {
    const {selector, childList, lineContent, trimmedLine, additionalLineList, config} = lineData;
    const {codeHighlight, parseLink} = config;
    const additionLineListRender = renderAdditionalLineList(lineData);
    const childListRender = renderChildList(childList);

    let fullLineContent = removeEndBreakLine(lineContent) + additionLineListRender;

    fullLineContent = makeImage(fullLineContent);
    fullLineContent = makeLink(fullLineContent);
    if (parseLink) {
        fullLineContent = makeLinkFromText(fullLineContent);
    }
    fullLineContent = makeCheckbox(fullLineContent);
    fullLineContent = makePairTag(fullLineContent);
    fullLineContent += childListRender;

    if (getIsLine(lineData)) {
        return '<hr/>';
    }

    if (getIsTable(lineData)) {
        return renderTable(lineData);
    }

    if (getIsCode(lineData)) {
        const codeText = codeHighlight(lineContent, additionalLineList.join('\n'));

        return lineContent ? `<code data-lang="${lineContent}">${codeText}</code>` : `<code>${codeText}</code>`;
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
