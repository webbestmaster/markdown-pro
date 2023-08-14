import {mailPrefix} from '../markdown-const';

import {getLinkIndexList, getTagIndexList, harArrayListOverflow, PairNumberArrayType} from './render-util';

const linkTextRegExpGlobal = /(\w+:\/\/[\w.]+\.\w+[\w+/]*)/giu;
const mailTextRegExpGlobal = /([\w.-]+@[\w.]+\.\w+[\w+/]*)/giu;

function linkReplacer(html: string, replacer: RegExp, hrefPrefix: string): string {
    const linkPairIndexList = getLinkIndexList(html);
    const tagIndexList = getTagIndexList(html);

    return html.replace(replacer, (match: string, brackets1: string, offset: number): string => {
        const rawLinkIndexArray: PairNumberArrayType = [offset, offset];

        if (harArrayListOverflow(rawLinkIndexArray, tagIndexList)) {
            return match;
        }

        if (harArrayListOverflow(rawLinkIndexArray, linkPairIndexList)) {
            return match;
        }

        return `<a href="${hrefPrefix}${match}">${match}</a>`;
    });
}

export function makeLinkFromText(html: string): string {
    return linkReplacer(html, linkTextRegExpGlobal, '');
}

export function makeMailFromText(html: string): string {
    return linkReplacer(html, mailTextRegExpGlobal, mailPrefix);
}
