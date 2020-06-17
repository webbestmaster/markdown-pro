// @flow

export function cleanLine(line: string): string {
    return line.trim().replace(/\s+/g, ' ');
}

export function getIsAllSymbolsEqual(line: string): boolean {
    const [firstSymbol] = line;

    return line.split(firstSymbol).join('').length === 0;
}

export const htmlPairTag = /<(\w+)[^>]*>[\S\s]*?<\/\1>/;
export const htmlSingleTag = /<\w+[^>]*?\s*\/>/;
