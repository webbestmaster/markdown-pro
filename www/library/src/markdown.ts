import type {MarkdownConfigShallowType, MarkdownConfigType} from "../library";
import {getFullWrapperClassName} from "./helper";
import {defaultMarkdownConfig} from "./markdown-const";
import {getMdFootnoteContent} from "./parser/footnote/footnote-helper";
import {parseLine} from "./parser/parse-line";
import type {DocumentMetaType, FootnoteType, LineDataType} from "./parser/parser-type";
import {renderChildList} from "./render/render";
import {emptyString} from "./render/render-const";

export function markdown(mdInput: string, config: MarkdownConfigShallowType = defaultMarkdownConfig): string {
    const markdownConfig: MarkdownConfigType = {
        ...defaultMarkdownConfig,
        ...config,
    };

    const {useWrapper} = markdownConfig;

    const markdownFootnoteConfig: MarkdownConfigType = {
        ...defaultMarkdownConfig,
        ...config,
        useWrapper: false,
    };

    const mainParent: LineDataType = {
        additionalLineList: [],
        childList: [],
        config: markdownConfig,
        line: emptyString,
        lineContent: "",
        lineIndex: -1,
        selector: emptyString,
        spaceCount: -1,
        trimmedLine: "",
    };
    const structuredLineDataList: Array<LineDataType> = [mainParent];
    const savedLineDataList: Array<LineDataType> = [mainParent];
    const documentMeta: DocumentMetaType = {
        codeLineData: null,
        config: markdownConfig,
        footnoteList: [],
        tableLineData: null,
        variable: {},
    };

    mdInput.split("\n").forEach((line: string, lineIndex: number, allLineList: ReadonlyArray<string>) => {
        parseLine(line, lineIndex, allLineList, structuredLineDataList, savedLineDataList, documentMeta);
    });

    const mainContent = renderChildList(structuredLineDataList, documentMeta);

    const footnoteDescriptionList: Array<string> = documentMeta.footnoteList.map((footnote: FootnoteType): string => {
        const {id} = footnote;
        const mdFootnoteContent = getMdFootnoteContent(footnote);

        return `<li id="${id}">${markdown(mdFootnoteContent, markdownFootnoteConfig)}</li>`;
    });

    const footnoteDescriptionHtml: string =
        footnoteDescriptionList.length === 0
            ? ""
            : ["<hr/>", '<ol type="1">', ...footnoteDescriptionList, "</ol>"].join("");

    const fullContent = [mainContent, footnoteDescriptionHtml].join("");

    if (!useWrapper) {
        return fullContent;
    }

    const fullWrapperClassName: string = getFullWrapperClassName(markdownConfig);

    return `<div class="${fullWrapperClassName}">${fullContent}</div>`;
}
