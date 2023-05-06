export function getIsFootnoteDescription(lineContent) {
    return /^\[\^[^\]]+]:/.test(lineContent);
}
export function getFootnoteById(id, list) {
    return list.find((footnote) => footnote.id === id);
}
export function getFootnoteInlineLineContent(match) {
    return match.slice(3, -1).trim();
}
// see findFootnoteMarkGlobalRegExp
export function getFootnoteMarkId(match) {
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    return getFootnoteInlineLineContent(match).toLowerCase().replace(/\W/g, ' ').trim().replace(/\s+/g, '-');
}
export function getMdFootnoteContent(footnote) {
    const { inlineLineContent, descriptionLineData } = footnote;
    if (descriptionLineData) {
        const { lineContent, additionalLineList } = descriptionLineData;
        const start = lineContent.indexOf(']:') + 2;
        return lineContent.slice(start) + '\n' + additionalLineList.join('\n');
    }
    return inlineLineContent;
}
//# sourceMappingURL=footnote-helper.js.map