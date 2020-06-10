// @flow

import type {LineDataType} from '../parse-line';

const headerMap = {
    '###### ': 'h6',
    '##### ': 'h5',
    '#### ': 'h4',
    '### ': 'h3',
    '## ': 'h2',
    '# ': 'h1',
};

const headerMapKey = Object.keys(headerMap).sort((keyA: string, keyB: string): number => keyB.length - keyA.length);

export function parseHeader(lineData: LineDataType): string {
    const {line} = lineData;

    const trimmedMayBeHeader = line.trim().replace(/\s+/g, ' ');
    const headerMapKeyLength = headerMapKey.length;

    // eslint-disable-next-line no-loops/no-loops
    for (let keyIndex = 0; keyIndex < headerMapKeyLength; keyIndex += 1) {
        const key = headerMapKey[keyIndex];

        if (trimmedMayBeHeader.startsWith(key)) {
            return `${trimmedMayBeHeader.replace(key, `<${headerMap[key]}>`)}</${headerMap[key]}>`;
        }
    }

    console.error('Can not parse header', lineData);

    return line;
}
