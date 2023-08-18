import {FootnoteTypeType} from "../parser-type";

export const footnoteTypeMap: {[key in FootnoteTypeType]: FootnoteTypeType} = {
    inline: "inline",
    "super": "super",
};

// Export const footnotePrefix = 'fn-';

// eslint-disable-next-line optimize-regex/optimize-regex
export const findFootnoteMarkGlobalRegExp = /\S\[\^[^\]]+?\]|\S\^\[[^\]]+?\]/gu;
