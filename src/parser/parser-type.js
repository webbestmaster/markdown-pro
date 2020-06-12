// @flow

// TODO: come up with a good value
export type SelectorNoTagWrapperType = '1234567890';
export type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export type SelectorUlItemType = '+ ' | '- ' | '* ';
export type SelectorOlItemType = '0. ' | '1. ';
export type SelectorParagraphType = '';

export type SelectorType =
    | SelectorNoTagWrapperType
    | SelectorHeaderType
    | SelectorUlItemType
    | SelectorOlItemType
    | SelectorParagraphType;

// export type PositionInListType = 'first' | 'last' | 'single';

export type LineDataType = {|
    +lineIndex: number,
    +spaceCount: number,
    +selector: SelectorType,
    +line: string,
    +trimmedLine: string,
    +childList: Array<LineDataType>,
    // isFirst: boolean,
    // isLast: boolean,
|};
