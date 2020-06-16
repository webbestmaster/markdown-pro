// @flow

/* global document, setTimeout */

import {parseLine} from './parser/parse-line';
import type {DocumentMetaType, LineDataType} from './parser/parser-type';
import {emptyString} from './parser/parser-const';
import {renderChildList} from './render/render';
import markdownStyle from './markdown.scss';

export function markdown(mdInput: string): string {
    const mainParent: LineDataType = {
        lineIndex: -1,
        spaceCount: -1,
        selector: emptyString,
        line: emptyString,
        trimmedLine: '',
        lineContent: '',
        childList: [],
        additionalLineList: [],
        // isFirst: true,
        // isLast: true,
    };
    const structuredLineDataList: Array<LineDataType> = [mainParent];
    const savedLineDataList: Array<LineDataType> = [mainParent];
    const documentMeta: DocumentMetaType = {
        codeLineData: null,
    };

    mdInput.split('\n').forEach((line: string, lineIndex: number, allLineList: Array<string>) => {
        parseLine(line, lineIndex, allLineList, structuredLineDataList, savedLineDataList, documentMeta);
    });

    return `<div class="${markdownStyle.markdown_wrapper}">${renderChildList(structuredLineDataList)}</div>`;
}
