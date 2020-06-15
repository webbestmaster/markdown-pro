// @flow

export type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export type SelectorBlockquoteType = '> ';
export type SelectorLineType = '---' | '***' | '___';

export type SelectorUlItemType = '+ ' | '- ' | '* ';

export type SelectorOlNumericItemType = '0. ';
export type SelectorOlBigRomanNumberItemType = 'I. ';
export type SelectorOlSmallRomanNumberItemType = 'i. ';
export type SelectorOlBigAlphabetItemType = 'A. ';
export type SelectorOlSmallAlphabetItemType = 'a. ';

export type OlTypeNumericType = '1';
export type OlTypeBigRomanNumberType = 'I';
export type OlTypeSmallRomanNumberType = 'i';
export type OlTypeBigAlphabetType = 'A';
export type OlTypeSmallAlphabetType = 'a';

export type OlAttributeType =
    | OlTypeNumericType
    | OlTypeBigRomanNumberType
    | OlTypeSmallRomanNumberType
    | OlTypeBigAlphabetType
    | OlTypeSmallAlphabetType;

export type SelectorOlItemType =
    | SelectorOlNumericItemType
    | SelectorOlBigRomanNumberItemType
    | SelectorOlSmallRomanNumberItemType
    | SelectorOlBigAlphabetItemType
    | SelectorOlSmallAlphabetItemType;

export type SelectorParagraphType = '';

export type SelectorType =
    | SelectorHeaderType
    | SelectorUlItemType
    | SelectorOlItemType
    | SelectorParagraphType
    | SelectorBlockquoteType
    | SelectorLineType;

export type LineDataType = {|
    // order number of line, start with 0
    +lineIndex: number,
    // left spaces before any content
    +spaceCount: number,
    // selector to render as html, example - '###'
    +selector: SelectorType,
    // full line with all symbols, example - '### this is line'
    +line: string,
    // trimmed line
    +trimmedLine: string,
    // trimmed line without selector, example - 'this is line'
    +lineContent: string,
    // line children
    +childList: Array<LineDataType>,
    // additional line list
    +additionalLineList: Array<string>,
|};

export type OlParseDataType = {|
    +selector: SelectorOlItemType,
    +regExpSearchSelector: RegExp,
    +olAttributeType: OlAttributeType,
|};

export type ShortLineInfoType = {|
    +selector: SelectorType,
    +lineContent: string,
|};
