// @flow

const headerMap = {
    '###### ': 'h6',
    '##### ': 'h5',
    '#### ': 'h4',
    '### ': 'h3',
    '## ': 'h2',
    '# ': 'h1',
};

const headerMapKey = Object.keys(headerMap).sort((keyA: string, keyB: string): number => keyB.length - keyA.length);

export function parseHeader(mayBeHeader: string): string {
    const trimmedMayBeHeader = mayBeHeader.trim().replace(/\s+/g, ' ');
    const headerMapKeyLength = headerMapKey.length;

    // eslint-disable-next-line no-loops/no-loops
    for (let keyIndex = 0; keyIndex < headerMapKeyLength; keyIndex += 1) {
        const key = headerMapKey[keyIndex];

        if (trimmedMayBeHeader.startsWith(key)) {
            return `${trimmedMayBeHeader.replace(key, `<${headerMap[key]}>`)}</${headerMap[key]}>`;
        }
    }

    return mayBeHeader;
}
