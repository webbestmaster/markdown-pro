export const selectorHeaderList = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
// export const selectorHeaderList: Array<SelectorHeaderType> = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
export const selectorBlockquoteList = ['> '];
// export const selectorBlockquoteList: Array<SelectorBlockquoteType> = ['> '];
export const selectorLineList = ['---', '***', '___'];
// export const selectorLineList: Array<SelectorLineType> = ['---', '***', '___'];
export const selectorTableList = ['|'];
// export const selectorTableList: Array<SelectorTableType> = ['|'];
export const selectorCodeList = ['```'];
// export const selectorCodeList: Array<SelectorCodeType> = ['```'];
export const selectorULItemList = ['+ ', '- ', '* '];
// export const selectorULItemList: Array<SelectorUlItemType> = ['+ ', '- ', '* '];
export const olNumericItemSelector = '0. ';
export const olNumericItemRegExp = /^\d+\.\s/;
export const olNumericType = '1';
export const olBigRomanNumberItemSelector = 'I. ';
export const olBigRomanNumberItemRegExp = /^[CDILMVX]+\.\s/;
export const olBigRomanNumberType = 'I';
export const olSmallRomanNumberItemSelector = 'i. ';
export const olSmallRomanNumberItemRegExp = /^[cdilmvx]+\.\s/;
export const olSmallRomanNumberType = 'i';
export const olBigAlphabetItemSelector = 'A. ';
export const olBigAlphabetItemRegExp = /^[A-Z]+\.\s/;
export const olBigAlphabetType = 'A';
export const olSmallAlphabetItemSelector = 'a. ';
export const olSmallAlphabetItemRegExp = /^[a-z]+\.\s/;
export const olSmallAlphabetType = 'a';
export const oLParseDataList = [
    {
        olAttributeType: olNumericType,
        regExpSearchSelector: olNumericItemRegExp,
        selector: olNumericItemSelector,
    },
    {
        olAttributeType: olBigRomanNumberType,
        regExpSearchSelector: olBigRomanNumberItemRegExp,
        selector: olBigRomanNumberItemSelector,
    },
    {
        olAttributeType: olSmallRomanNumberType,
        regExpSearchSelector: olSmallRomanNumberItemRegExp,
        selector: olSmallRomanNumberItemSelector,
    },
    {
        olAttributeType: olBigAlphabetType,
        regExpSearchSelector: olBigAlphabetItemRegExp,
        selector: olBigAlphabetItemSelector,
    },
    {
        olAttributeType: olSmallAlphabetType,
        regExpSearchSelector: olSmallAlphabetItemRegExp,
        selector: olSmallAlphabetItemSelector,
    },
];
export const selectorList = [
    // ...selectorLineList,
    ...selectorHeaderList,
    ...selectorULItemList,
    ...selectorTableList,
    ...selectorCodeList,
    ...selectorBlockquoteList,
].sort((itemA, itemB) => itemB.length - itemA.length);
const pairTagSelectorBold = {
    closeTag: '</b>',
    equal: /\*+/,
    openTag: '<b>',
    selector: '**',
};
const pairTagSelectorUnderline = {
    closeTag: '</u>',
    equal: /_+/,
    openTag: '<u>',
    selector: '__',
};
const pairTagSelectorStrike = {
    closeTag: '</strike>',
    equal: /~+/,
    openTag: '<strike>',
    selector: '~~',
};
const pairTagSelectorItalic1 = {
    closeTag: '</i>',
    equal: /_+/,
    openTag: '<i>',
    selector: '_',
};
const pairTagSelectorItalic2 = {
    closeTag: '</i>',
    equal: /\*+/,
    openTag: '<i>',
    selector: '*',
};
const pairTagSelectorSub = {
    closeTag: '</sub>',
    equal: /~+/,
    openTag: '<sub>',
    selector: '~',
};
const pairTagSelectorSup = {
    closeTag: '</sup>',
    equal: /\^+/,
    openTag: '<sup>',
    selector: '^',
};
const pairTagSelectorInlineCode = {
    closeTag: '</code>',
    equal: /`+/,
    openTag: '<code data-type="inline">',
    selector: '`',
};
const pairTagSelectorBoldAndItalic = {
    closeTag: '</i></b>',
    equal: /\*+/,
    openTag: '<b><i>',
    selector: '***',
};
// more long selectors should be first
export const pairTagSelectorList = [
    pairTagSelectorBoldAndItalic,
    pairTagSelectorBold,
    pairTagSelectorUnderline,
    pairTagSelectorItalic1,
    pairTagSelectorItalic2,
    pairTagSelectorStrike,
    pairTagSelectorSub,
    pairTagSelectorSup,
    pairTagSelectorInlineCode,
];
//# sourceMappingURL=parser-selector.js.map