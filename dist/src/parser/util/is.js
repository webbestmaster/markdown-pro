export function hasStringNonEmptySymbols(value) {
    return typeof value === 'string' && value.trim().length > 0;
}
export function hasEmailSymbol(value) {
    return value.includes('@');
}
//# sourceMappingURL=is.js.map