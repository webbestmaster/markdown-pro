// @flow

import type {FootnoteType} from '../parser-type';
import {cleanLine} from '../util/string';

export function getIsFootnoteDescription(lineContent: string): boolean {
    return /^\[\^[^\]]+]:/.test(lineContent);
}

export function getFootnoteById(id: string, list: Array<FootnoteType>): FootnoteType | void {
    return list.find((footnote: FootnoteType): boolean => footnote.id === id);
}

// see findFootnoteMarkGlobalRegExp
export function getFootnoteMarkId(match: string): string {
    return cleanLine(match.slice(3, -1).trim()).toLowerCase().replace(/\s/g, '-');
}
