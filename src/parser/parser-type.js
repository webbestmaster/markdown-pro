// @flow

// TODO: come up with a good value
export type SelectorNoTagWrapperType = '1234567890';
export type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export type SelectorUlItemType = '+ ' | '- ' | '* ';
export type SelectorOlNumericItemType = '0. ';
export type SelectorParagraphType = '';

export type SelectorType =
    | SelectorNoTagWrapperType
    | SelectorHeaderType
    | SelectorUlItemType
    | SelectorOlNumericItemType
    | SelectorParagraphType;

// export type PositionInListType = 'first' | 'last' | 'single';

export type LineDataType = {|
    +lineIndex: number,
    +spaceCount: number,
    +selector: SelectorType,
    +line: string,
    +trimmedLine: string,
    +lineContent: string,
    +childList: Array<LineDataType>,
    +additionalLineList: Array<string>,
    // +isAdditional: boolean,
    // isFirst: boolean,
    // isLast: boolean,
|};
