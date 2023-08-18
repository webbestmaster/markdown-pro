import {MarkdownConfigType} from "../../library";

export type SelectorHeaderType = "# " | "## " | "### " | "#### " | "##### " | "###### ";
export type SelectorBlockquoteType = "> ";
export type SelectorLineType = "___" | "---" | "***";
export type SelectorTableType = "|";
export type SelectorCodeType = "```";

export type SelectorUlItemType = "- " | "* " | "+ ";

export type SelectorOlNumericItemType = "0. ";
export type SelectorOlBigRomanNumberItemType = "I. ";
export type SelectorOlSmallRomanNumberItemType = "i. ";
export type SelectorOlBigAlphabetItemType = "A. ";
export type SelectorOlSmallAlphabetItemType = "a. ";

export type OlTypeNumericType = "1";
export type OlTypeBigRomanNumberType = "I";
export type OlTypeSmallRomanNumberType = "i";
export type OlTypeBigAlphabetType = "A";
export type OlTypeSmallAlphabetType = "a";

export type OlAttributeType =
    | OlTypeBigAlphabetType
    | OlTypeBigRomanNumberType
    | OlTypeNumericType
    | OlTypeSmallAlphabetType
    | OlTypeSmallRomanNumberType;

export type SelectorOlItemType =
    | SelectorOlBigAlphabetItemType
    | SelectorOlBigRomanNumberItemType
    | SelectorOlNumericItemType
    | SelectorOlSmallAlphabetItemType
    | SelectorOlSmallRomanNumberItemType;

export type SelectorParagraphType = "";

export type SelectorType =
    | SelectorBlockquoteType
    | SelectorCodeType
    | SelectorHeaderType
    | SelectorLineType
    | SelectorOlItemType
    | SelectorParagraphType
    | SelectorTableType
    | SelectorUlItemType;

export type LineDataType = Readonly<{
    // Additional line list
    additionalLineList: Array<string>;
    // Line children
    childList: Array<LineDataType>;
    config: MarkdownConfigType;
    // Full line with all symbols, example - '### this is line'
    line: string;
    // Trimmed line without selector, example - 'this is line'
    lineContent: string;
    // Order number of line, start with 0
    lineIndex: number;
    // Selector to render as html, example - '###'
    selector: SelectorType;
    // Left spaces before any content
    spaceCount: number;
    // Trimmed line
    trimmedLine: string;
}>;

export type OlParseDataType = Readonly<{
    olAttributeType: OlAttributeType;
    regExpSearchSelector: RegExp;
    selector: SelectorOlItemType;
}>;

export type ShortLineInfoType = Readonly<{
    lineContent: string;
    selector: SelectorType;
}>;

export type FootnoteTypeType = "inline" | "super";

export interface FootnoteType {
    descriptionLineData: LineDataType | null;
    readonly id: string;
    readonly inlineLineContent: string;
    readonly type: FootnoteTypeType;
}

export type VariableType = Readonly<{
    key: string;
    value: string;
}>;

export interface DocumentMetaType {
    codeLineData: LineDataType | null;
    readonly config: MarkdownConfigType;
    readonly footnoteList: Array<FootnoteType>;
    tableLineData: LineDataType | null;
    variable: Record<string, VariableType>;
}

export type PairTagSelectorType = Readonly<{
    closeTag: string;
    equal: RegExp;
    openTag: string;
    selector: string;
}>;
