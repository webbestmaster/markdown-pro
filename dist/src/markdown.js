import { parseLine } from "./parser/parse-line";
import { emptyString } from "./render/render-const";
import { renderChildList } from "./render/render";
import { defaultMarkdownConfig } from "./markdown-const";
import { getMdFootnoteContent } from "./parser/footnote/footnote-helper";
import { getFullWrapperClassName } from "./helper";
export function markdown(mdInput, config = defaultMarkdownConfig) {
    const markdownConfig = {
        ...defaultMarkdownConfig,
        ...config,
    };
    const { useWrapper } = markdownConfig;
    const markdownFootnoteConfig = {
        ...defaultMarkdownConfig,
        ...config,
        useWrapper: false,
    };
    const mainParent = {
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
    const structuredLineDataList = [mainParent];
    const savedLineDataList = [mainParent];
    const documentMeta = {
        codeLineData: null,
        config: markdownConfig,
        footnoteList: [],
        tableLineData: null,
        variable: {},
    };
    mdInput.split("\n").forEach((line, lineIndex, allLineList) => {
        parseLine(line, lineIndex, allLineList, structuredLineDataList, savedLineDataList, documentMeta);
    });
    const mainContent = renderChildList(structuredLineDataList, documentMeta);
    const footnoteDescriptionList = documentMeta.footnoteList.map((footnote) => {
        const { id } = footnote;
        const mdFootnoteContent = getMdFootnoteContent(footnote);
        return `<li id="${id}">${markdown(mdFootnoteContent, markdownFootnoteConfig)}</li>`;
    });
    const footnoteDescriptionHtml = footnoteDescriptionList.length === 0
        ? ""
        : ["<hr/>", '<ol type="1">', ...footnoteDescriptionList, "</ol>"].join("");
    const fullContent = [mainContent, footnoteDescriptionHtml].join("");
    if (!useWrapper) {
        return fullContent;
    }
    const fullWrapperClassName = getFullWrapperClassName(markdownConfig);
    return `<div class="${fullWrapperClassName}">${fullContent}</div>`;
}
//# sourceMappingURL=markdown.js.map