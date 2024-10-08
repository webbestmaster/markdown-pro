export type PairNumberArrayType = [number, number];

export function harArrayOverflow(arrayA: PairNumberArrayType, arrayB: PairNumberArrayType): boolean {
    const [startA, endA] = arrayA;
    const [startB, endB] = arrayB;

    return !(endA < startB || endB < startA);
}

export function harArrayListOverflow(
    pairNumberArray: PairNumberArrayType,
    arrayList: Array<PairNumberArrayType>
): boolean {
    for (const arrayInList of arrayList) {
        if (harArrayOverflow(pairNumberArray, arrayInList)) {
            return true;
        }
    }

    return false;
}

function getMatchIndexList(html: string, regExp: RegExp): Array<PairNumberArrayType> {
    const resultList: Array<PairNumberArrayType> = [];

    // eslint-disable-next-line sonarjs/sonar-prefer-regexp-exec
    const matchList = html.match(regExp);

    if (!matchList) {
        return [];
    }

    let currentIndex = 0;

    for (const matchedString of matchList) {
        const start = html.indexOf(matchedString, currentIndex);
        const end = start + matchedString.length - 1;

        currentIndex = end;

        resultList.push([start, end]);
    }

    return resultList;
}

// eslint-disable-next-line sonarjs/slow-regex
const tagSelectorRegExpGlobal = /(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/gu;

export function getTagIndexList(html: string): Array<PairNumberArrayType> {
    return getMatchIndexList(html, tagSelectorRegExpGlobal);
}

// eslint-disable-next-line sonarjs/slow-regex
const linkSelectorRegExpGlobal = /(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/gu;

export function getLinkIndexList(html: string): Array<PairNumberArrayType> {
    return getMatchIndexList(html, linkSelectorRegExpGlobal);
}
