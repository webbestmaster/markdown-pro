import { FootnoteType } from '../parser-type';
export declare function getIsFootnoteDescription(lineContent: string): boolean;
export declare function getFootnoteById(id: string, list: Array<FootnoteType>): FootnoteType | void;
export declare function getFootnoteInlineLineContent(match: string): string;
export declare function getFootnoteMarkId(match: string): string;
export declare function getMdFootnoteContent(footnote: FootnoteType): string;
