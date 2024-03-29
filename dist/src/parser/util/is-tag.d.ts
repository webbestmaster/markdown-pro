import type { LineDataType } from "../parser-type";
export declare function getIsHeader(lineData: LineDataType): boolean;
export declare function getIsUlItem(lineData: LineDataType): boolean;
export declare function getIsOlItem(lineData: LineDataType): boolean;
export declare function getIsLine(lineData: LineDataType): boolean;
export declare function getIsTable(lineData: LineDataType): boolean;
export declare function getIsCode(lineData: LineDataType): boolean;
export declare function getIsBlockquote(lineData: LineDataType): boolean;
export declare function getIsStartWithHtml(lineData: LineDataType): boolean;
