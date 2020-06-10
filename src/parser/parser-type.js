// @flow

export type SelectorHeaderType = '# ' | '## ' | '### ' | '#### ' | '##### ' | '###### ';
export type SelectorUlItemType = '+ ' | '- ' | '* ';
export type SelectorOlItemType = '0. ' | '1. ';
export type SelectorParagraphType = '';

export type SelectorType = SelectorHeaderType | SelectorUlItemType | SelectorOlItemType | SelectorParagraphType;
