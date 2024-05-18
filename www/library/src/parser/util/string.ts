import {emptyString} from "../../render/render-const";

export function filterEmptyString(line: string): boolean {
    return line.trim() !== emptyString;
}

export function cleanLine(line: string): string {
    return line.trim().replace(/\s+/gu, " ");
}

export function getIsAllSymbolsEqual(line: string): boolean {
    const charList: Array<string> = line.split("");

    const [firstSymbol] = charList;

    if (!firstSymbol) {
        return true;
    }

    for (const char of charList) {
        if (char !== firstSymbol) {
            return false;
        }
    }

    return true;
}
