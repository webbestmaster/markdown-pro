import type { DocumentMetaType, LineDataType, OlAttributeType, SelectorType } from "../parser/parser-type";
export declare const breakLineRegExp: RegExp;
export declare function addBreakLine(line: string): string;
export declare function removeEndBreakLine(line: string): string;
export declare function getHasEndBreakLine(lineContent: string, useLineBreak: boolean): boolean;
export declare function makeImage(html: string, documentMeta: DocumentMetaType): string;
export declare function makeCheckbox(html: string): string;
export declare function isImageListOnly(lineContent: string): boolean;
export declare function makeMail(html: string): string;
export declare function makeLink(html: string): string;
export declare function getOlTypeBySelector(dataLineSelector: SelectorType): OlAttributeType;
export declare function getOlStart(trimmedLine: string): string;
export declare function renderAdditionalLineList(lineData: LineDataType): string;
export declare function renderInlineHtml(html: string, documentMeta: DocumentMetaType): string;
