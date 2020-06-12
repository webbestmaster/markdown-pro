// @flow

/* global document, setTimeout */

import {parseLine} from './parser/parse-line';
import type {LineDataType} from './parser/parser-type';
import {emptyString, selectorNoTagWrapper} from './parser/parser-const';
import {renderChildList, renderLineData} from './parser/parser-helper';

export function markdown(mdInput: string): string {
    const mainParent: LineDataType = {
        lineIndex: -1,
        spaceCount: -1,
        selector: selectorNoTagWrapper,
        line: emptyString,
        trimmedLine: '',
        lineContent: '',
        childList: [],
        // isFirst: true,
        // isLast: true,
    };
    const structuredLineDataList: Array<LineDataType> = [mainParent];
    const savedLineDataList: Array<LineDataType> = [mainParent];

    mdInput.split('\n').forEach((line: string, lineIndex: number, allLineList: Array<string>) => {
        parseLine(line, lineIndex, allLineList, structuredLineDataList, savedLineDataList);
    });

    console.log(structuredLineDataList);

    return renderChildList(structuredLineDataList);

    // return renderLineData(structuredLineDataList[0], 0, structuredLineDataList);

    // return htmlLineList.join('\n');
}

const result = markdown(`
    time to mark down
        I ma here

### unordered list


+ Create a list by starting a line with
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
        ### inner header
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit


+ Very easy!



### unordered list 2




+ Create a list by starting a line with 2
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at


    + Facilisis in pretium nisl aliquet



    - Nulla volutpat aliquam velit
+ Very easy!
`);

setTimeout(() => {
    const wrapper = document.querySelector('.js-app-wrapper');

    if (!wrapper) {
        console.error('.js-app-wrapper is not define');
        return;
    }

    wrapper.innerHTML = result;
}, 1e3);
