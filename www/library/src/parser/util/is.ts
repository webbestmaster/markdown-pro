export function hasStringNonEmptySymbols(value: unknown): value is string {
    return typeof value === 'string' && value.trim().length > 0;
}

export function hasEmailSymbol(value: string): boolean {
    return value.includes('@');
}
