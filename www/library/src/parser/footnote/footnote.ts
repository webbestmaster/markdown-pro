import type {DocumentMetaType, FootnoteType, LineDataType} from "../parser-type";
import {findFootnoteMarkGlobalRegExp, footnoteTypeMap} from "./footnote-const";
import {getFootnoteById, getFootnoteInlineLineContent, getFootnoteMarkId} from "./footnote-helper";

function matchToFootnote(match: string): FootnoteType {
    const id = getFootnoteMarkId(match);
    const inlineLineContent = getFootnoteInlineLineContent(match);

    if (match.indexOf("[^") === 1) {
        return {
            descriptionLineData: null,
            id,
            inlineLineContent,
            type: footnoteTypeMap.super,
        };
    }

    return {
        descriptionLineData: null,
        id,
        inlineLineContent,
        type: footnoteTypeMap.inline,
    };
}

export function getFootnoteList(lineContent: string): Array<FootnoteType> {
    // eslint-disable-next-line sonarjs/sonar-prefer-regexp-exec
    const matchedList = lineContent.match(findFootnoteMarkGlobalRegExp);

    if (!matchedList) {
        return [];
    }

    return matchedList.map(matchToFootnote);
}

export function fromToFootnoteList(fromList: Array<FootnoteType>, toList: Array<FootnoteType>): void {
    for (const fromItem of fromList) {
        const {id, descriptionLineData} = fromItem;
        const candidateToExtend = toList.find((toItem: FootnoteType): boolean => {
            return toItem.id === id;
        });

        if (candidateToExtend) {
            if (!candidateToExtend.descriptionLineData) {
                candidateToExtend.descriptionLineData = descriptionLineData;
            }
        } else {
            toList.push(fromItem);
        }
    }
}

export function addLineData(lineData: LineDataType, toList: Array<FootnoteType>): void {
    const {lineContent} = lineData;
    const rawMatchId = /\[\^[^\]]+?\]:/u.exec(lineContent);

    if (!rawMatchId) {
        return;
    }

    const [rawId] = rawMatchId;

    const id = rawId.slice(2, -2).trim();

    const footnote = getFootnoteById(id, toList);

    if (footnote) {
        footnote.descriptionLineData = lineData;
        return;
    }

    toList.push({
        descriptionLineData: lineData,
        id,
        inlineLineContent: lineContent,
        type: footnoteTypeMap.super,
    });
}

export function makeFootnoteSuper(fullLineContent: string, documentMeta: DocumentMetaType): string {
    return fullLineContent.replace(findFootnoteMarkGlobalRegExp, (match: string): string => {
        const charList: Array<string> = match.split("");
        const [firstLetter] = charList;
        const {footnoteList} = documentMeta;
        const id = getFootnoteMarkId(match);

        const footnote = getFootnoteById(id, footnoteList);

        if (!footnote) {
            return "";
        }

        return `${firstLetter}<a href="#${id}"><sup>[${footnoteList.indexOf(footnote) + 1}]</sup></a>`;
    });
}
