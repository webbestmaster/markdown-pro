// @flow

/* global document, setTimeout */

import {parseLine} from './parser/parse-line';
import type {LineDataType} from './parser/parser-type';
import {emptyString} from './parser/parser-const';
import {renderChildList} from './render/render';

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

    mdInput.split('\n').forEach((line: string, lineIndex: number, allLineList: Array<string>) => {
        parseLine(line, lineIndex, allLineList, structuredLineDataList, savedLineDataList);
    });

    return renderChildList(structuredLineDataList);
}
