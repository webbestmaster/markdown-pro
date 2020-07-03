// @flow

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
    // eslint-disable-next-line no-loops/no-loops
    for (const arrayInList of arrayList) {
        if (harArrayOverflow(pairNumberArray, arrayInList)) {
            return true;
        }
    }

    return false;
}

const tagSelectorRegExpGlobal = /(<\w+[\S\s]*?>)|(<\/\w+?>)|(<\w+[\S\s]*?\/>)/g;

export function getTagIndexList(html: string): Array<PairNumberArrayType> {
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

const linkSelectorRegExpGlobal = /(<a\s*?>[\S\s]*?<\/a>)|(<a\s[\S\s]*?>[\S\s]*?<\/a>)|(<a\s+[\S\s]*?\/>)/g;

export function getLinkIndexList(html: string): Array<PairNumberArrayType> {
    const resultList: Array<PairNumberArrayType> = [];
    const matchList = [...html.matchAll(linkSelectorRegExpGlobal)];

    // eslint-disable-next-line no-loops/no-loops
    for (const matched of matchList) {
        const start = matched.index;
        const end = start + matched[0].length - 1;

        resultList.push([start, end]);
    }

    return resultList;
}
