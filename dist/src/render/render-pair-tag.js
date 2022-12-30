import { pairTagSelectorList } from '../parser/parser-selector';
import { getTagIndexList, harArrayOverflow } from './render-util';
// eslint-disable-next-line complexity, max-statements
export function getSelectorIndexList(html, pairTagSelector) {
    const { selector, equal } = pairTagSelector;
    const resultList = [];
    const selectorLength = selector.length;
    if (selectorLength === 0) {
        // console.error('Selector is empty string');
        return resultList;
    }
    let indexOfSelector = html.indexOf(selector, 0);
    // eslint-disable-next-line no-loops/no-loops
    while (indexOfSelector !== -1) {
        const equalSymbolsMatch = html.slice(indexOfSelector).match(equal);
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
function addPairTag(html, pairTagSelector) {
    const { selector, openTag, closeTag } = pairTagSelector;
    const selectorLength = selector.length;
    if (!html.includes(selector)) {
        return html;
    }
    const tagPairIndexList = getTagIndexList(html);
    let selectorIndexList = getSelectorIndexList(html, pairTagSelector);
    // remove indexes into tags, f.e. - <a href="http://ex__am__ple.com">text</a>
    selectorIndexList = selectorIndexList.filter((selectorIndex) => {
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
    let resultTagPairedList = html.slice(0, selectorIndexList[0]);
    // eslint-disable-next-line no-loops/no-loops
    for (let selectorIndexInList = 1; selectorIndexInList <= selectorIndexListLength; selectorIndexInList += 1) {
        const selectorIndex = selectorIndexList[selectorIndexInList];
        const htmlPart = html.slice(selectorIndexList[selectorIndexInList - 1] + selectorLength, selectorIndex);
        resultTagPairedList += selectorIndexInList % 2 === 1 ? openTag + htmlPart + closeTag : htmlPart;
    }
    return resultTagPairedList;
}
export function makePairTag(html) {
    let result = html;
    // eslint-disable-next-line no-loops/no-loops
    for (const pairTagSelector of pairTagSelectorList) {
        result = addPairTag(result, pairTagSelector);
    }
    return result;
}
//# sourceMappingURL=render-pair-tag.js.map