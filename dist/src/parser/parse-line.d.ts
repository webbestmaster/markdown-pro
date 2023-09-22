import type { DocumentMetaType, LineDataType } from "./parser-type";
export declare function parseLine(line: string, lineIndex: number, allLineList: ReadonlyArray<string>, structuredLineDataList: ReadonlyArray<LineDataType>, savedLineDataList: Array<LineDataType>, documentMeta: DocumentMetaType): boolean;
