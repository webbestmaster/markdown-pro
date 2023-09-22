export const selectorHeaderList = ["# ", "## ", "### ", "#### ", "##### ", "###### "];
// Export const selectorHeaderList: Array<SelectorHeaderType> = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
export const selectorBlockquoteList = ["> "];
// Export const selectorBlockquoteList: Array<SelectorBlockquoteType> = ['> '];
export const selectorLineList = ["---", "***", "___"];
// Export const selectorLineList: Array<SelectorLineType> = ['---', '***', '___'];
export const selectorTableList = ["|"];
// Export const selectorTableList: Array<SelectorTableType> = ['|'];
export const selectorCodeList = ["```"];
// Export const selectorCodeList: Array<SelectorCodeType> = ['```'];
export const selectorULItemList = ["+ ", "- ", "* "];
// Export const selectorULItemList: Array<SelectorUlItemType> = ['+ ', '- ', '* '];
export const olNumericItemSelector = "0. ";
export const olNumericItemRegExp = /^\d+\.\s/u;
export const olNumericType = "1";
export const olBigRomanNumberItemSelector = "I. ";
export const olBigRomanNumberItemRegExp = /^[CDILMVX]+\.\s/u;
export const olBigRomanNumberType = "I";
export const olSmallRomanNumberItemSelector = "i. ";
export const olSmallRomanNumberItemRegExp = /^[cdilmvx]+\.\s/u;
export const olSmallRomanNumberType = "i";
export const olBigAlphabetItemSelector = "A. ";
export const olBigAlphabetItemRegExp = /^[A-Z]+\.\s/u;
export const olBigAlphabetType = "A";
export const olSmallAlphabetItemSelector = "a. ";
export const olSmallAlphabetItemRegExp = /^[a-z]+\.\s/u;
export const olSmallAlphabetType = "a";
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
].sort((itemA, itemB) => {
    return itemB.length - itemA.length;
});
const pairTagSelectorBold = {
    closeTag: "</b>",
    equal: /\*+/u,
    openTag: "<b>",
    selector: "**",
};
const pairTagSelectorUnderline = {
    closeTag: "</u>",
    equal: /_+/u,
    openTag: "<u>",
    selector: "__",
};
const pairTagSelectorStrike = {
    closeTag: "</strike>",
    equal: /~+/u,
    openTag: "<strike>",
    selector: "~~",
};
const pairTagSelectorItalic1 = {
    closeTag: "</i>",
    equal: /_+/u,
    openTag: "<i>",
    selector: "_",
};
const pairTagSelectorItalic2 = {
    closeTag: "</i>",
    equal: /\*+/u,
    openTag: "<i>",
    selector: "*",
};
const pairTagSelectorSub = {
    closeTag: "</sub>",
    equal: /~+/u,
    openTag: "<sub>",
    selector: "~",
};
const pairTagSelectorSup = {
    closeTag: "</sup>",
    equal: /\^+/u,
    openTag: "<sup>",
    selector: "^",
};
const pairTagSelectorInlineCode = {
    closeTag: "</code>",
    equal: /`+/u,
    openTag: '<code data-type="inline">',
    selector: "`",
};
const pairTagSelectorBoldAndItalic = {
    closeTag: "</i></b>",
    equal: /\*+/u,
    openTag: "<b><i>",
    selector: "***",
};
// More long selectors should be first
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