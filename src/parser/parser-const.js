// @flow

import type {
    SelectorHeaderType,
    SelectorOlNumericItemType,
    SelectorParagraphType,
    SelectorType,
    SelectorUlItemType,
    // PositionInListType,
    SelectorNoTagWrapperType,
} from './parser-type';

export const emptyString = '';
export const space = ' ';

export const selectorHeaderList: Array<SelectorHeaderType> = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
export const selectorULItemList: Array<SelectorUlItemType> = ['+ ', '- ', '* '];
// export const selectorOLItemList: Array<SelectorOlNumericItemType> = ['0. ', '1. '];
// export const selectorParagraphList: Array<SelectorParagraphType> = [''];

export const olNumericItemSelector: SelectorOlNumericItemType = '0. ';
export const olNumericItemRegExp = /^\d+\.\s/;

export const selectorList: Array<SelectorType> = [
    ...selectorHeaderList,
    ...selectorULItemList,
    olNumericItemSelector,
    // ...selectorOLItemList,
    // ...selectorParagraphList,
].sort((itemA: SelectorType, itemB: SelectorType): number => itemB.length - itemA.length);

/*
export const positionInListMap: {[key: PositionInListType]: PositionInListType} = {
    first: 'first',
    last: 'last',
    single: 'single',
};
*/

// TODO: come up with a good value
export const selectorNoTagWrapper: SelectorNoTagWrapperType = '1234567890';
