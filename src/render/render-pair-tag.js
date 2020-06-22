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

// eslint-disable-next-line complexity, max-statements
function getSelectorIndexList(html: string, pairTagSelector: PairTagSelectorType): Array<number> {
    const {selector, equal} = pairTagSelector;

    const resultList: Array<number> = [];
    const selectorLength = selector.length;

    if (selectorLength === 0) {
        console.error('Selector is empty string');
        return resultList;
    }

    let slicedHtml: string = '';

    let indexOf: number = html.indexOf(selector, 0);

    // eslint-disable-next-line no-loops/no-loops
    while (indexOf !== -1) {
        slicedHtml = html.slice(indexOf);

        const equalSymbolsMatch = slicedHtml.match(equal);

        if (!equalSymbolsMatch) {
            console.error('equalSymbolsLine is not found');
            return [];
        }

        const [equalSymbolLine] = equalSymbolsMatch;
        const equalSymbolLineLength = equalSymbolLine.length;

        if (equalSymbolLineLength === selectorLength) {
            resultList.push(indexOf);
        }

        // slicedHtml = slicedHtml.slice(selectorLength);
        indexOf = html.indexOf(selector, indexOf + equalSymbolLineLength);
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

    let selectorIndexList: Array<number> = getSelectorIndexList(html, pairTagSelector);

    // remove indexes into tags, f.e. - <a href="http://ex__am__ple.com">text</a>
    selectorIndexList = selectorIndexList.filter((selectorIndex: number): boolean => {
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
        const htmlPart = html.slice(selectorIndexList[selectorIndexInList - 1] + selectorLength, selectorIndex);

        resultTagPairedList += selectorIndexInList % 2 === 1 ? openTag + htmlPart + closeTag : htmlPart;
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
