import {VariableType} from '../parser-type';

export function getVariableData(lineContent: string): VariableType | null {
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
