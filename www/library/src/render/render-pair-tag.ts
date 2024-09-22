import {pairTagSelectorList} from "../parser/parser-selector";
import type {PairTagSelectorType} from "../parser/parser-type";
import {getTagIndexList, harArrayOverflow} from "./render-util";

export function getSelectorIndexList(html: string, pairTagSelector: PairTagSelectorType): Array<number> {
    const {selector, equal} = pairTagSelector;

    const resultList: Array<number> = [];
    const selectorLength = selector.length;

    if (selectorLength === 0) {
        // Console.error('Selector is empty string');
        return resultList;
    }

    let indexOfSelector: number = html.indexOf(selector, 0);

    while (indexOfSelector !== -1) {
        // eslint-disable-next-line sonarjs/sonar-prefer-regexp-exec
        const equalSymbolsMatch: Array<string> | null = html.slice(indexOfSelector).match(equal);

        if (!equalSymbolsMatch) {
            return [];
        }

        const [equalSymbolLine] = equalSymbolsMatch;
        const equalSymbolLineLength = equalSymbolLine.length;

        if (equalSymbolLineLength === selectorLength) {
            resultList.push(indexOfSelector);
        }

        indexOfSelector = html.indexOf(selector, indexOfSelector + equalSymbolLineLength);
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

    // Remove indexes into tags, f.e. - <a href="http://ex__am__ple.com">text</a>
    selectorIndexList = selectorIndexList.filter((selectorIndex: number): boolean => {
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

    for (let selectorIndexInList = 1; selectorIndexInList <= selectorIndexListLength; selectorIndexInList += 1) {
        const selectorIndex = selectorIndexList[selectorIndexInList];
        const htmlPart = html.slice(selectorIndexList[selectorIndexInList - 1] + selectorLength, selectorIndex);

        resultTagPairedList += selectorIndexInList % 2 === 1 ? openTag + htmlPart + closeTag : htmlPart;
    }

    return resultTagPairedList;
}

export function makePairTag(html: string): string {
    let result = html;

    for (const pairTagSelector of pairTagSelectorList) {
        result = addPairTag(result, pairTagSelector);
    }

    return result;
}
