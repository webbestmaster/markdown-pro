// @flow

import type {
    SelectorHeaderType,
    SelectorOlNumericItemType,
    SelectorType,
    SelectorUlItemType,
    SelectorOlBigAlphabetItemType,
    SelectorOlSmallAlphabetItemType,
    SelectorOlBigRomanNumberItemType,
    SelectorOlSmallRomanNumberItemType,
    OlTypeNumericType,
    OlTypeBigAlphabetType,
    OlTypeSmallAlphabetType,
    OlTypeBigRomanNumberType,
    OlTypeSmallRomanNumberType,
    OlParseDataType,
} from './parser-type';

export const emptyString = '';
export const space = ' ';

export const selectorHeaderList: Array<SelectorHeaderType> = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
export const selectorULItemList: Array<SelectorUlItemType> = ['+ ', '- ', '* '];

export const olNumericItemSelector: SelectorOlNumericItemType = '0. ';
export const olNumericItemRegExp = /^\d+\.\s/;
export const olNumericType: OlTypeNumericType = '1';

export const olBigRomanNumberItemSelector: SelectorOlBigRomanNumberItemType = 'I. ';
export const olBigRomanNumberItemRegExp = /^[CDILMVX]+\.\s/;
export const olBigRomanNumberType: OlTypeBigRomanNumberType = 'I';

export const olSmallRomanNumberItemSelector: SelectorOlSmallRomanNumberItemType = 'i. ';
export const olSmallRomanNumberItemRegExp = /^[cdilmvx]+\.\s/;
export const olSmallRomanNumberType: OlTypeSmallRomanNumberType = 'i';

export const olBigAlphabetItemSelector: SelectorOlBigAlphabetItemType = 'A. ';
export const olBigAlphabetItemRegExp = /^[A-Z]+\.\s/;
export const olBigAlphabetType: OlTypeBigAlphabetType = 'A';

export const olSmallAlphabetItemSelector: SelectorOlSmallAlphabetItemType = 'a. ';
export const olSmallAlphabetItemRegExp = /^[a-z]+\.\s/;
export const olSmallAlphabetType: OlTypeSmallAlphabetType = 'a';

export const oLParseDataList: Array<OlParseDataType> = [
    {
        selector: olNumericItemSelector,
        regExpSearchSelector: olNumericItemRegExp,
        olAttributeType: olNumericType,
    },
    {
        selector: olBigRomanNumberItemSelector,
        regExpSearchSelector: olBigRomanNumberItemRegExp,
        olAttributeType: olBigRomanNumberType,
    },
    {
        selector: olSmallRomanNumberItemSelector,
        regExpSearchSelector: olSmallRomanNumberItemRegExp,
        olAttributeType: olSmallRomanNumberType,
    },
    {
        selector: olBigAlphabetItemSelector,
        regExpSearchSelector: olBigAlphabetItemRegExp,
        olAttributeType: olBigAlphabetType,
    },
    {
        selector: olSmallAlphabetItemSelector,
        regExpSearchSelector: olSmallAlphabetItemRegExp,
        olAttributeType: olSmallAlphabetType,
    },
];

export const selectorList: Array<SelectorType> = [
    ...selectorHeaderList,
    ...selectorULItemList,
    olNumericItemSelector,
    olBigAlphabetItemSelector,
    olSmallAlphabetItemSelector,
    olBigRomanNumberItemSelector,
    olSmallRomanNumberItemSelector,
].sort((itemA: SelectorType, itemB: SelectorType): number => itemB.length - itemA.length);
