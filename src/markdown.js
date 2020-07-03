// @flow

import {parseLine} from './parser/parse-line';
import type {DocumentMetaType, LineDataType} from './parser/parser-type';
import {emptyString} from './render/render-const';
import {renderChildList} from './render/render';
import type {MarkdownConfigShallowType, MarkdownConfigType} from './markdown-type';
import {defaultMarkdownConfig} from './markdown-const';

export function markdown(mdInput: string, config: MarkdownConfigShallowType = defaultMarkdownConfig): string {
    const markdownConfig: MarkdownConfigType = {
        ...defaultMarkdownConfig,
        ...config,
    };

    const mainParent: LineDataType = {
        lineIndex: -1,
        spaceCount: -1,
        selector: emptyString,
        line: emptyString,
        trimmedLine: '',
        lineContent: '',
        childList: [],
        additionalLineList: [],
        useLineBreak: markdownConfig.useLineBreak,
        // isFirst: true,
        // isLast: true,
    };
    const structuredLineDataList: Array<LineDataType> = [mainParent];
    const savedLineDataList: Array<LineDataType> = [mainParent];
    const documentMeta: DocumentMetaType = {
        codeLineData: null,
        useLineBreak: markdownConfig.useLineBreak,
        codeHighlight: markdownConfig.codeHighlight,
    };

    mdInput.split('\n').forEach((line: string, lineIndex: number, allLineList: Array<string>) => {
        parseLine(line, lineIndex, allLineList, structuredLineDataList, savedLineDataList, documentMeta);
    });

    const {wrapperClassName: wrapperClassNameConfig} = markdownConfig;
    const {wrapperClassName: wrapperClassNameDefault} = defaultMarkdownConfig;

    const fullWrapperClassName
        = wrapperClassNameConfig === wrapperClassNameDefault
            ? wrapperClassNameDefault
            : `${wrapperClassNameDefault} ${wrapperClassNameConfig}`;

    return `<div class="${fullWrapperClassName}">${renderChildList(structuredLineDataList)}</div>`;
}

// eslint-disable-next-line import/no-default-export
export default markdown;
