import type { DocumentMetaType, SelectorType } from "../../parser/parser-type";
import type { CellAlignType } from "./render-table-type";
export declare function renderTableCellContent(line: string, documentMeta: DocumentMetaType): string;
export declare function isTableDivideLine(line: string): boolean;
export declare function lineToAlign(divideRaw: string): CellAlignType;
export declare function getAlignList(selector: SelectorType, divideLine: string): Array<CellAlignType>;
