/*
export function getIsVariableLine(lineContent: string): boolean {
    return /\[[^^][\S\s]+?]:/.test(lineContent);
}
*/
export function getVariableData(lineContent) {
    const matchData = lineContent.match(/\[([^^][\S\s]+?)]:\s+?\S/);
    if (!matchData) {
        return null;
    }
    // eslint-disable-next-line prefer-destructuring
    const key = matchData[1];
    const value = lineContent.slice(lineContent.indexOf(']:') + 3).trim();
    return {
        key,
        value,
    };
}
//# sourceMappingURL=variable.js.map