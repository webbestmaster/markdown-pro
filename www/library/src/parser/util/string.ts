import {emptyString} from '../../render/render-const';

export function filterEmptyString(line: string): boolean {
    return line.trim() !== emptyString;
}

export function cleanLine(line: string): string {
    return line.trim().replace(/\s+/g, ' ');
}

export function getIsAllSymbolsEqual(line: string): boolean {
    const charList: Array<string> = [...line];

    const [firstSymbol] = charList;

    if (!firstSymbol) {
        return true;
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const char of charList) {
        if (char !== firstSymbol) {
            return false;
        }
    }

    return true;
}
