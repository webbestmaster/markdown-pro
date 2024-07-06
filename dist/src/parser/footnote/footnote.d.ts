import type { DocumentMetaType, FootnoteType, LineDataType } from "../parser-type";
export declare function getFootnoteList(lineContent: string): Array<FootnoteType>;
export declare function fromToFootnoteList(fromList: Array<FootnoteType>, toList: Array<FootnoteType>): void;
export declare function addLineData(lineData: LineDataType, toList: Array<FootnoteType>): void;
export declare function makeFootnoteSuper(fullLineContent: string, documentMeta: DocumentMetaType): string;
