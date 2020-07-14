// @flow

import type {DocumentMetaType, LineDataType, SelectorType} from '../../parser/parser-type';
import {filterEmptyString} from '../../parser/util/string';
import {emptyString} from '../render-const';
import {makeCheckbox, makeImage, makeLink} from '../render-helper';
import {makeLinkFromText} from '../render-link';
import {makePairTag} from '../render-pair-tag';
import {makeFootnoteSuper} from '../../parser/footnote/footnote';

import {cellAlignTypeMap} from './render-table-const';
import type {CellAlignType} from './render-table-type';

export function renderTableCellContent(lineData: LineDataType, line: string, documentMeta: DocumentMetaType): string {
    const {config} = lineData;
    const {parseLink} = config;

    let fullLineContent = makeFootnoteSuper(line, documentMeta);

    fullLineContent = makeImage(fullLineContent, documentMeta);

    fullLineContent = makeLink(fullLineContent);
    if (parseLink) {
        fullLineContent = makeLinkFromText(fullLineContent);
    }
    fullLineContent = makeCheckbox(fullLineContent);
    fullLineContent = makePairTag(fullLineContent);

    return fullLineContent.trim();
}

export function isTableDivideLine(line: string): boolean {
    return line.replace(/[\s:|-]/g, '') === emptyString;
}

export function lineToAlign(divideRaw: string): CellAlignType {
    const alignMark = ':';
    const divide = divideRaw.trim();
    const [firstChar] = divide;
    const lastChar = divide[divide.length - 1];

    if (firstChar === lastChar && firstChar === alignMark) {
        return cellAlignTypeMap.center;
    }

    if (lastChar === alignMark) {
        return cellAlignTypeMap.right;
    }

    return cellAlignTypeMap.left;
}

export function getAlignList(selector: SelectorType, divideLine: string): Array<CellAlignType> {
    return divideLine.split(selector).filter(filterEmptyString).map<CellAlignType>(lineToAlign);
}
