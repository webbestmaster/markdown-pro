import { MarkdownConfigType } from '../../library';
export declare type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export declare type SelectorBlockquoteType = '> ';
export declare type SelectorLineType = '___' | '---' | '***';
export declare type SelectorTableType = '|';
export declare type SelectorCodeType = '```';
export declare type SelectorUlItemType = '- ' | '* ' | '+ ';
export declare type SelectorOlNumericItemType = '0. ';
export declare type SelectorOlBigRomanNumberItemType = 'I. ';
export declare type SelectorOlSmallRomanNumberItemType = 'i. ';
export declare type SelectorOlBigAlphabetItemType = 'A. ';
export declare type SelectorOlSmallAlphabetItemType = 'a. ';
export declare type OlTypeNumericType = '1';
export declare type OlTypeBigRomanNumberType = 'I';
export declare type OlTypeSmallRomanNumberType = 'i';
export declare type OlTypeBigAlphabetType = 'A';
export declare type OlTypeSmallAlphabetType = 'a';
export declare type OlAttributeType = OlTypeBigAlphabetType | OlTypeBigRomanNumberType | OlTypeNumericType | OlTypeSmallAlphabetType | OlTypeSmallRomanNumberType;
export declare type SelectorOlItemType = SelectorOlBigAlphabetItemType | SelectorOlBigRomanNumberItemType | SelectorOlNumericItemType | SelectorOlSmallAlphabetItemType | SelectorOlSmallRomanNumberItemType;
export declare type SelectorParagraphType = '';
export declare type SelectorType = SelectorBlockquoteType | SelectorCodeType | SelectorHeaderType | SelectorLineType | SelectorOlItemType | SelectorParagraphType | SelectorTableType | SelectorUlItemType;
export declare type LineDataType = Readonly<{
    additionalLineList: Array<string>;
    childList: Array<LineDataType>;
    config: MarkdownConfigType;
    line: string;
    lineContent: string;
    lineIndex: number;
    selector: SelectorType;
    spaceCount: number;
    trimmedLine: string;
}>;
export declare type OlParseDataType = Readonly<{
    olAttributeType: OlAttributeType;
    regExpSearchSelector: RegExp;
    selector: SelectorOlItemType;
}>;
export declare type ShortLineInfoType = Readonly<{
    lineContent: string;
    selector: SelectorType;
}>;
export declare type FootnoteTypeType = 'inline' | 'super';
export declare type FootnoteType = {
    descriptionLineData: LineDataType | null;
    readonly id: string;
    readonly inlineLineContent: string;
    readonly type: FootnoteTypeType;
};
export declare type VariableType = Readonly<{
    key: string;
    value: string;
}>;
export declare type DocumentMetaType = {
    codeLineData: LineDataType | null;
    readonly config: MarkdownConfigType;
    readonly footnoteList: Array<FootnoteType>;
    tableLineData: LineDataType | null;
    variable: {
        [key: string]: VariableType;
    };
};
export declare type PairTagSelectorType = Readonly<{
    closeTag: string;
    equal: RegExp;
    openTag: string;
    selector: string;
}>;
