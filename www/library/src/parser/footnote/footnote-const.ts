import type {FootnoteTypeType} from "../parser-type";

export const footnoteTypeMap: {[key in FootnoteTypeType]: FootnoteTypeType} = {
    inline: "inline",
    "super": "super",
};

// Export const footnotePrefix = 'fn-';

export const findFootnoteMarkGlobalRegExp = /\S\[\^[^\]]+?\]|\S\^\[[^\]]+?\]/gu;
