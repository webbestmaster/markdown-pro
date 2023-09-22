export function harArrayOverflow(arrayA, arrayB) {
    const [startA, endA] = arrayA;
    const [startB, endB] = arrayB;
    return !(endA < startB || endB < startA);
}
export function harArrayListOverflow(pairNumberArray, arrayList) {
    // eslint-disable-next-line no-loops/no-loops
    for (const arrayInList of arrayList) {
        if (harArrayOverflow(pairNumberArray, arrayInList)) {
            return true;
        }
    }
    return false;
}
function getMatchIndexList(html, regExp) {
    const resultList = [];
    const matchList = html.match(regExp);
    if (!matchList) {
        return [];
    }
    let currentIndex = 0;
    // eslint-disable-next-line no-loops/no-loops
    for (const matchedString of matchList) {
        const start = html.indexOf(matchedString, currentIndex);
        const end = start + matchedString.length - 1;
        currentIndex = end;
        resultList.push([start, end]);
    }
    return resultList;
}
const tagSelectorRegExpGlobal = /(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/gu;
export function getTagIndexList(html) {
    return getMatchIndexList(html, tagSelectorRegExpGlobal);
}
const linkSelectorRegExpGlobal = /(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/gu;
export function getLinkIndexList(html) {
    return getMatchIndexList(html, linkSelectorRegExpGlobal);
}
//# sourceMappingURL=render-util.js.map