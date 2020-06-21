// @flow

import type {PairTagSelectorType} from '../parser/parser-type';
import {pairTagSelectorList} from '../parser/parser-const';

type PairNumberArrayType = [number, number];

const tagSelectorRegExpGlobal = /(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;

function harArrayOverflow(arrayA: PairNumberArrayType, arrayB: PairNumberArrayType): boolean {
    const [startA, endA] = arrayA;
    const [startB, endB] = arrayB;

    return !(endA < startB || endB < startA);
}

function getTagIndexList(html: string): Array<PairNumberArrayType> {
    const resultList: Array<PairNumberArrayType> = [];
    const matchList = [...html.matchAll(tagSelectorRegExpGlobal)];

    // eslint-disable-next-line no-loops/no-loops
    for (const matched of matchList) {
        const start = matched.index;
        const end = start + matched[0].length - 1;

        resultList.push([start, end]);
    }

    return resultList;
}

function getSelectorIndexList(html: string, selector: string): Array<number> {
    const resultList: Array<number> = [];
    const selectorLength = selector.length;

    if (selectorLength === 0) {
        console.error('Selector is empty string');
        return resultList;
    }

    let indexOf: number = html.indexOf(selector, 0);

    // eslint-disable-next-line no-loops/no-loops
    while (indexOf !== -1) {
        resultList.push(indexOf);
        indexOf = html.indexOf(selector, indexOf + selectorLength);
    }

    if (resultList.length % 2 === 1) {
        return resultList.slice(0, -1);
    }

    return resultList;
}

function addPairTag(html: string, pairTagSelector: PairTagSelectorType): string {
    const {selector, openTag, closeTag} = pairTagSelector;
    const selectorLength = selector.length;

    if (!html.includes(selector)) {
        return html;
    }

    const tagPairIndexList = getTagIndexList(html);

    const selectorIndexList = getSelectorIndexList(html, selector).filter((selectorIndex: number): boolean => {
        // eslint-disable-next-line no-loops/no-loops
        for (const tagPairIndex of tagPairIndexList) {
            const selectorStart = selectorIndex;
            const selectorEnd = selectorIndex + selectorLength - 1;

            if (harArrayOverflow(tagPairIndex, [selectorStart, selectorEnd])) {
                return false;
            }
        }

        return true;
    });

    const selectorIndexListLength = selectorIndexList.length;

    if (selectorIndexListLength === 0) {
        return html;
    }

    let resultTagPairedList: string = html.slice(0, selectorIndexList[0]);

    // eslint-disable-next-line no-loops/no-loops
    for (let selectorIndexInList = 1; selectorIndexInList <= selectorIndexListLength; selectorIndexInList += 1) {
        const selectorIndex = selectorIndexList[selectorIndexInList];
        const htmlPath = html.slice(selectorIndexList[selectorIndexInList - 1] + selectorLength, selectorIndex);

        resultTagPairedList += selectorIndexInList % 2 === 1 ? openTag + htmlPath + closeTag : htmlPath;
    }

    return resultTagPairedList;
}

export function makePairTag(html: string): string {
    let result = html;

    // eslint-disable-next-line no-loops/no-loops
    for (const pairTagSelector of pairTagSelectorList) {
        result = addPairTag(result, pairTagSelector);
    }

    return result;
}
