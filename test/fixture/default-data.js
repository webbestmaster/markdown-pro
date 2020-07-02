// @flow

import type {LineDataType} from '../../src/parser/parser-type';
import {selectorList} from '../../src/parser/parser-selector';

export const defaultLineData: LineDataType = {
    lineIndex: 0,
    spaceCount: 0,
    selector: selectorList[0],
    line: '',
    trimmedLine: '',
    lineContent: '',
    childList: [],
    additionalLineList: [],
    useLineBreak: false,
};