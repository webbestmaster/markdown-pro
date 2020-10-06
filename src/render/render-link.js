// @flow

import {getLinkIndexList, getTagIndexList, harArrayListOverflow} from './render-util';

const linkTextRegExpGlobal = /(\w+:\/\/[\w.]+\.\w+[\w+/]*)/gi;
const mailTextRegExpGlobal = /([\w.-]+@[\w.]+\.\w+[\w+/]*)/gi;

export function makeLinkFromText(html: string): string {
    const linkPairIndexList = getLinkIndexList(html);
    const tagIndexList = getTagIndexList(html);

    return html.replace(
        linkTextRegExpGlobal,
        (match: string, brackets1: string, offset: number, fullString: string): string => {
            const rawLinkIndexArray = [offset, offset];

            if (harArrayListOverflow(rawLinkIndexArray, tagIndexList)) {
                return match;
            }

            if (harArrayListOverflow(rawLinkIndexArray, linkPairIndexList)) {
                return match;
            }

            return `<a href="${match}">${match}</a>`;
        }
    );
}

export function makeMailFromText(html: string): string {
    const linkPairIndexList = getLinkIndexList(html);
    const tagIndexList = getTagIndexList(html);

    return html.replace(
        mailTextRegExpGlobal,
        (match: string, brackets1: string, offset: number, fullString: string): string => {
            const rawLinkIndexArray = [offset, offset];

            if (harArrayListOverflow(rawLinkIndexArray, tagIndexList)) {
                return match;
            }

            if (harArrayListOverflow(rawLinkIndexArray, linkPairIndexList)) {
                return match;
            }

            return `<a href="mailto:${match}">${match}</a>`;
        }
    );
}
