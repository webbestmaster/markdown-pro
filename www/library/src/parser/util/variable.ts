import type {VariableType} from "../parser-type";

export function getVariableData(lineContent: string): VariableType | null {
    // eslint-disable-next-line optimize-regex/optimize-regex
    const matchData = /\[([^^][\S\s]+?)\]:\s+?\S/u.exec(lineContent);

    if (!matchData) {
        return null;
    }

    // eslint-disable-next-line prefer-destructuring, @typescript-eslint/prefer-destructuring
    const key = matchData[1];

    const value = lineContent.slice(lineContent.indexOf("]:") + 3).trim();

    return {
        key,
        value,
    };
}
