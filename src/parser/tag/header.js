// @flow

import type {LineDataType} from '../parse-line';
import type {SelectorHeaderType} from '../parser-type';
import {cleanLine} from '../parser-helper';

const headerMap: {[key: SelectorHeaderType]: string} = {
    '###### ': 'h6',
    '##### ': 'h5',
    '#### ': 'h4',
    '### ': 'h3',
    '## ': 'h2',
    '# ': 'h1',
};

const headerMapKey = Object.keys(headerMap).sort((keyA: string, keyB: string): number => keyB.length - keyA.length);

function makeHtmlHeader(cleanHeader: string, key: SelectorHeaderType): string {
    const headerContent = cleanHeader.replace(key, '');
    const headerTag = headerMap[key];
    // todo: add styling for headerContent here

    return `<${headerTag}>${headerContent}</${headerTag}>`;
}

export function parseHeader(lineData: LineDataType): string {
    const {line} = lineData;

    const cleanHeader = cleanLine(line);
    const headerMapKeyLength = headerMapKey.length;

    // eslint-disable-next-line no-loops/no-loops
    for (let keyIndex = 0; keyIndex < headerMapKeyLength; keyIndex += 1) {
        const key = headerMapKey[keyIndex];

        if (cleanHeader.startsWith(key)) {
            return makeHtmlHeader(cleanHeader, key);
        }
    }

    console.error('Can not parse header', lineData);

    return line;
}
