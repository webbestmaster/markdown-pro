import { emptyString } from "../../render/render-const";
export function filterEmptyString(line) {
    return line.trim() !== emptyString;
}
export function cleanLine(line) {
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    return line.trim().replace(/\s+/gu, " ");
}
export function getIsAllSymbolsEqual(line) {
    // eslint-disable-next-line unicorn/prefer-spread
    const charList = line.split("");
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