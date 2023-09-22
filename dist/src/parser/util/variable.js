export function getVariableData(lineContent) {
    // eslint-disable-next-line optimize-regex/optimize-regex
    const matchData = /\[([^^][\S\s]+?)\]:\s+?\S/u.exec(lineContent);
    if (!matchData) {
        return null;
    }
    // eslint-disable-next-line prefer-destructuring
    const key = matchData[1];
    const value = lineContent.slice(lineContent.indexOf("]:") + 3).trim();
    return {
        key,
        value,
    };
}
//# sourceMappingURL=variable.js.map