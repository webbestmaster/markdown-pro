import {FootnoteType} from '../parser-type';

export function getIsFootnoteDescription(lineContent: string): boolean {
    // eslint-disable-next-line optimize-regex/optimize-regex
    return /^\[\^[^\]]+\]:/u.test(lineContent);
}

export function getFootnoteById(id: string, list: Array<FootnoteType>): FootnoteType | undefined {
    return list.find((footnote: FootnoteType): boolean => {
        return footnote.id === id;
    });
}

export function getFootnoteInlineLineContent(match: string): string {
    return match.slice(3, -1).trim();
}

// See findFootnoteMarkGlobalRegExp
export function getFootnoteMarkId(match: string): string {
    // eslint-disable-next-line unicorn/prefer-string-replace-all, newline-per-chained-call
    return getFootnoteInlineLineContent(match).toLowerCase().replace(/\W/gu, ' ').trim().replace(/\s+/gu, '-');
}

export function getMdFootnoteContent(footnote: FootnoteType): string {
    const {inlineLineContent, descriptionLineData} = footnote;

    if (descriptionLineData) {
        const {lineContent, additionalLineList} = descriptionLineData;
        const start = lineContent.indexOf(']:') + 2;

        return `${lineContent.slice(start)}\n${additionalLineList.join('\n')}`;
    }

    return inlineLineContent;
}
