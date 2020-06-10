// @flow

export function cleanLine(line: string): string {
    return line.trim().replace(/\s+/g, ' ');
}
