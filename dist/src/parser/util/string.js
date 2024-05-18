import { emptyString } from "../../render/render-const";
export function filterEmptyString(line) {
    return line.trim() !== emptyString;
}
export function cleanLine(line) {
    return line.trim().replace(/\s+/gu, " ");
}
export function getIsAllSymbolsEqual(line) {
    const charList = line.split("");
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
//# sourceMappingURL=string.js.map