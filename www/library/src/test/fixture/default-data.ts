import type {LineDataType} from "../../parser/parser-type";
import {selectorList} from "../../parser/parser-selector";
import {defaultMarkdownConfig} from "../../markdown-const";

export const defaultLineData: LineDataType = {
    additionalLineList: [],
    childList: [],
    config: defaultMarkdownConfig,
    line: "",
    lineContent: "",
    lineIndex: 0,
    selector: selectorList[0],
    spaceCount: 0,
    trimmedLine: "",
};
