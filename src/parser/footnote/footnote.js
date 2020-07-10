// @flow

import {type FootnoteType} from '../parser-type';
import type {DocumentMetaType, LineDataType} from '../parser-type';

import {findFootnoteMarkGlobalRegExp, footnotePrefix, footnoteTypeMap} from './footnote-const';
import {getFootnoteById, getFootnoteMarkId, getIsFootnoteDescription} from './footnote-helper';

function matchToFootnote(match: string): FootnoteType {
    const id = getFootnoteMarkId(match);
    const descriptionLineData = null;

    if (match.indexOf('[^') === 1) {
        return {
            id,
            descriptionLineData,
            type: footnoteTypeMap.super,
        };
    }

    // match.indexOf('^[')
    return {
        id,
        descriptionLineData,
        type: footnoteTypeMap.inline,
    };
}

export function getFootnoteList(lineContent: string): Array<FootnoteType> {
    const matchedList = lineContent.match(findFootnoteMarkGlobalRegExp);

    if (!matchedList) {
        return [];
    }

    return matchedList.map(matchToFootnote);
}

export function fromToFootnoteList(fromList: Array<FootnoteType>, toList: Array<FootnoteType>) {
    // eslint-disable-next-line no-loops/no-loops
    for (const fromItem of fromList) {
        const {id} = fromItem;
        const candidateToExtend = toList.find((toItem: FootnoteType): boolean => toItem.id === id);

        if (candidateToExtend) {
            if (!candidateToExtend.descriptionLineData) {
                candidateToExtend.descriptionLineData = fromItem.descriptionLineData;
            }
        } else {
            toList.push(fromItem);
        }
    }
}

export function addLineData(lineData: LineDataType, toList: Array<FootnoteType>) {
    const {lineContent} = lineData;
    const rawMatchId = lineContent.match(/\[\^[^\]]+?]:/);

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
        id,
        type: footnoteTypeMap.super,
        descriptionLineData: lineData,
    });
}

export function makeFootnoteSuper(fullLineContent: string, documentMeta: DocumentMetaType): string {
    return fullLineContent.replace(findFootnoteMarkGlobalRegExp, (match: string): string => {
        const [firstLetter] = match;
        const {footnoteList} = documentMeta;
        const id = getFootnoteMarkId(match);

        const footnote = getFootnoteById(id, footnoteList);

        if (!footnote) {
            console.error('Can not find footnote by id: ' + id);
            return match;
        }

        return `${firstLetter}<a href="#${id}"><sup>[${footnoteList.indexOf(footnote) + 1}]</sup></a>`;
    });
}
