// @flow

export type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export type SelectorBlockquoteType = '> ';

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
    | SelectorBlockquoteType;

export type LineDataType = {|
    +lineIndex: number,
    +spaceCount: number,
    +selector: SelectorType,
    +line: string,
    +trimmedLine: string,
    +lineContent: string,
    +childList: Array<LineDataType>,
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
