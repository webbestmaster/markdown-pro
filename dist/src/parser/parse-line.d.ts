import { DocumentMetaType, LineDataType } from './parser-type';
export declare function parseLine(line: string, lineIndex: number, allLineList: Array<string>, structuredLineDataList: Array<LineDataType>, savedLineDataList: Array<LineDataType>, documentMeta: DocumentMetaType): boolean;
