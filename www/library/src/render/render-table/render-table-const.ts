import {CellAlignType, CellTagNameType} from "./render-table-type";

export const cellAlignTypeMap: Record<string, CellAlignType> = {
    center: "center",
    "default": "left",
    left: "left",
    right: "right",
};

export const cellTagNameTypeMap: Record<string, CellTagNameType> = {
    tdCell: "td",
    thCell: "th",
};
