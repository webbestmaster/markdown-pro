import { emptyString } from '../../render/render-const';
export function filterEmptyString(line) {
    return line.trim() !== emptyString;
}
export function cleanLine(line) {
    return line.trim().replace(/\s+/g, ' ');
}
export function getIsAllSymbolsEqual(line) {
    const charList = [...line];
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
//# sourceMappingURL=string.js.map