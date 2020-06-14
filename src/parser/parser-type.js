// @flow

export type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export type SelectorUlItemType = '+ ' | '- ' | '* ';

export type SelectorOlNumericItemType = '0. ';
export type SelectorOlBigAlphabetItemType = 'A. ';
export type SelectorOlSmallAlphabetItemType = 'a. ';
export type SelectorOlBigRomanNumberItemType = 'I. ';
export type SelectorOlSmallRomanNumberItemType = 'i. ';

export type OlTypeNumericType = '1';
export type OlTypeBigAlphabetType = 'A';
export type OlTypeSmallAlphabetType = 'a';
export type OlTypeBigRomanNumberType = 'I';
export type OlTypeSmallRomanNumberType = 'i';

export type OlAttributeType =
    | OlTypeNumericType
    | OlTypeBigAlphabetType
    | OlTypeSmallAlphabetType
    | OlTypeBigRomanNumberType
    | OlTypeSmallRomanNumberType;

export type SelectorOlItemType =
    | SelectorOlNumericItemType
    | SelectorOlBigAlphabetItemType
    | SelectorOlSmallAlphabetItemType
    | SelectorOlBigRomanNumberItemType
    | SelectorOlSmallRomanNumberItemType;

export type SelectorParagraphType = '';

export type SelectorType = SelectorHeaderType | SelectorUlItemType | SelectorOlItemType | SelectorParagraphType;

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
