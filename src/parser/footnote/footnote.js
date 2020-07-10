// @flow

import {type FootnoteType} from '../parser-type';

import {footnoteTypeMap} from './footnote-const';

function matchToFootnote(match: string): FootnoteType {
    const id = match.slice(3, -1);
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
    const matchedList = lineContent.match(/\S\[\^[^\]]+?]|\S\^\[[^\]]+?]/g);

    if (!matchedList) {
        return [];
    }

    return matchedList.map(matchToFootnote);
}
