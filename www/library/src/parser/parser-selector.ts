import type {
    OlParseDataType,
    OlTypeBigAlphabetType,
    OlTypeBigRomanNumberType,
    OlTypeNumericType,
    OlTypeSmallAlphabetType,
    OlTypeSmallRomanNumberType,
    PairTagSelectorType,
    SelectorOlBigAlphabetItemType,
    SelectorOlBigRomanNumberItemType,
    SelectorOlNumericItemType,
    SelectorOlSmallAlphabetItemType,
    SelectorOlSmallRomanNumberItemType,
    SelectorType,
} from "./parser-type";

export const selectorHeaderList: Array<SelectorType> = ["# ", "## ", "### ", "#### ", "##### ", "###### "];
// Export const selectorHeaderList: Array<SelectorHeaderType> = ['# ', '## ', '### ', '#### ', '##### ', '###### '];
export const selectorBlockquoteList: Array<SelectorType> = ["> "];
// Export const selectorBlockquoteList: Array<SelectorBlockquoteType> = ['> '];
export const selectorLineList: Array<SelectorType> = ["---", "***", "___"];
// Export const selectorLineList: Array<SelectorLineType> = ['---', '***', '___'];
export const selectorTableList: Array<SelectorType> = ["|"];
// Export const selectorTableList: Array<SelectorTableType> = ['|'];
export const selectorCodeList: Array<SelectorType> = ["```"];
// Export const selectorCodeList: Array<SelectorCodeType> = ['```'];

export const selectorULItemList: Array<SelectorType> = ["+ ", "- ", "* "];
// Export const selectorULItemList: Array<SelectorUlItemType> = ['+ ', '- ', '* '];

export const olNumericItemSelector: SelectorOlNumericItemType = "0. ";
export const olNumericItemRegExp = /^\d+\.\s/u;
export const olNumericType: OlTypeNumericType = "1";

export const olBigRomanNumberItemSelector: SelectorOlBigRomanNumberItemType = "I. ";
export const olBigRomanNumberItemRegExp = /^[CDILMVX]+\.\s/u;
export const olBigRomanNumberType: OlTypeBigRomanNumberType = "I";

export const olSmallRomanNumberItemSelector: SelectorOlSmallRomanNumberItemType = "i. ";
export const olSmallRomanNumberItemRegExp = /^[cdilmvx]+\.\s/u;
export const olSmallRomanNumberType: OlTypeSmallRomanNumberType = "i";

export const olBigAlphabetItemSelector: SelectorOlBigAlphabetItemType = "A. ";
export const olBigAlphabetItemRegExp = /^[A-Z]+\.\s/u;
export const olBigAlphabetType: OlTypeBigAlphabetType = "A";

export const olSmallAlphabetItemSelector: SelectorOlSmallAlphabetItemType = "a. ";
export const olSmallAlphabetItemRegExp = /^[a-z]+\.\s/u;
export const olSmallAlphabetType: OlTypeSmallAlphabetType = "a";

export const oLParseDataList: Array<OlParseDataType> = [
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

export const selectorList: Array<SelectorType> = [
    // ...selectorLineList,
    ...selectorHeaderList,
    ...selectorULItemList,
    ...selectorTableList,
    ...selectorCodeList,
    ...selectorBlockquoteList,
].sort((itemA: SelectorType, itemB: SelectorType): number => {
    return itemB.length - itemA.length;
});

const pairTagSelectorBold: PairTagSelectorType = {
    closeTag: "</b>",
    equal: /\*+/u,
    openTag: "<b>",
    selector: "**",
};
const pairTagSelectorUnderline: PairTagSelectorType = {
    closeTag: "</u>",
    equal: /_+/u,
    openTag: "<u>",
    selector: "__",
};
const pairTagSelectorStrike: PairTagSelectorType = {
    closeTag: "</strike>",
    equal: /~+/u,
    openTag: "<strike>",
    selector: "~~",
};
const pairTagSelectorItalic1: PairTagSelectorType = {
    closeTag: "</i>",
    equal: /_+/u,
    openTag: "<i>",
    selector: "_",
};
const pairTagSelectorItalic2: PairTagSelectorType = {
    closeTag: "</i>",
    equal: /\*+/u,
    openTag: "<i>",
    selector: "*",
};
const pairTagSelectorSub: PairTagSelectorType = {
    closeTag: "</sub>",
    equal: /~+/u,
    openTag: "<sub>",
    selector: "~",
};
const pairTagSelectorSup: PairTagSelectorType = {
    closeTag: "</sup>",
    equal: /\^+/u,
    openTag: "<sup>",
    selector: "^",
};
const pairTagSelectorInlineCode: PairTagSelectorType = {
    closeTag: "</code>",
    equal: /`+/u,
    openTag: '<code data-type="inline">',
    selector: "`",
};

const pairTagSelectorBoldAndItalic: PairTagSelectorType = {
    closeTag: "</i></b>",
    equal: /\*+/u,
    openTag: "<b><i>",
    selector: "***",
};

// More long selectors should be first
export const pairTagSelectorList: Array<PairTagSelectorType> = [
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
