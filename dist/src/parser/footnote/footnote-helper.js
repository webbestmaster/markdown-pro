export function getIsFootnoteDescription(lineContent) {
    return /^\[\^[^\]]+\]:/u.test(lineContent);
}
export function getFootnoteById(id, list) {
    return list.find((footnote) => {
        return footnote.id === id;
    });
}
export function getFootnoteInlineLineContent(match) {
    return match.slice(3, -1).trim();
}
// See findFootnoteMarkGlobalRegExp
export function getFootnoteMarkId(match) {
    // eslint-disable-next-line newline-per-chained-call
    return getFootnoteInlineLineContent(match).toLowerCase().replace(/\W/gu, " ").trim().replace(/\s+/gu, "-");
}
export function getMdFootnoteContent(footnote) {
    const { inlineLineContent, descriptionLineData } = footnote;
    if (descriptionLineData) {
        const { lineContent, additionalLineList } = descriptionLineData;
        const start = lineContent.indexOf("]:") + 2;
        return `${lineContent.slice(start)}\n${additionalLineList.join("\n")}`;
    }
    return inlineLineContent;
}
//# sourceMappingURL=footnote-helper.js.map