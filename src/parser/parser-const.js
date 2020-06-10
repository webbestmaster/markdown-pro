// @flow

import type {
    SelectorHeaderType,
    SelectorOlItemType,
    SelectorParagraphType,
    SelectorType,
    SelectorUlItemType,
} from './parser-type';

export const selectorHeaderList: Array<SelectorHeaderType> = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
export const selectorULItemList: Array<SelectorUlItemType> = ['+ ', '- ', '* '];
export const selectorOLItemList: Array<SelectorOlItemType> = ['0. ', '1. '];
export const selectorParagraphList: Array<SelectorParagraphType> = [''];

export const selectorList: Array<SelectorType> = [
    ...selectorHeaderList,
    ...selectorULItemList,
    ...selectorOLItemList,
    ...selectorParagraphList,
].sort((itemA: SelectorType, itemB: SelectorType): number => itemB.length - itemA.length);
