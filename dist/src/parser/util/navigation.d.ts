import type { LineDataType } from "../parser-type";
export declare function searchSiblingItem(lineData: LineDataType, lineDataList: Array<LineDataType>, direction: number): LineDataType | null;
export declare function getIsEdgeLine(lineData: LineDataType, lineDataList: Array<LineDataType>, direction: number): boolean;
export declare function getParent(lineData: LineDataType, lineDataList: Array<LineDataType>): LineDataType | null;
