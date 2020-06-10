// @flow

import type {SelectorType} from './parser-type';
import {selectorHeaderList, selectorList} from './parser-const';
import {parseHeader} from './tag/header';

export type LineDataType = {|
    +spaceCount: number,
    +selector: SelectorType,
    +line: string,
|};

function getSelector(line: string, spaceCount: number): SelectorType {
    // eslint-disable-next-line no-loops/no-loops
    for (const selector of selectorList) {
        if (line.indexOf(selector, spaceCount) === spaceCount) {
            return selector;
        }
    }
    return '';
}

export function parseLine(line: string): LineDataType {
    const spaceCount = line.search(/\S/);
    const selector = getSelector(line, spaceCount);

    return {spaceCount, selector, line};
}

export function parseLineData(lineData: LineDataType): string {
    const {selector, spaceCount, line} = lineData;

    // string has spaces only OR empty string
    if (spaceCount === -1) {
        return line;
    }

    if (selectorHeaderList.includes(selector)) {
        return parseHeader(lineData);
    }

    console.log(selector);

    return line;
}
