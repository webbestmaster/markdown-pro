export function hasStringNonEmptySymbols(value: unknown): boolean {
    return typeof value === 'string' && value.trim().length > 0;
}

export function hasEmailSymbol(value: string): boolean {
    return value.includes('@');
}
