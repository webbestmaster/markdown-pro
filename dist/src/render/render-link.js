import { mailPrefix } from '../markdown-const';
import { getLinkIndexList, getTagIndexList, harArrayListOverflow } from './render-util';
const linkTextRegExpGlobal = /(\w+:\/\/[\w.]+\.\w+[\w+/]*)/gi;
const mailTextRegExpGlobal = /([\w.-]+@[\w.]+\.\w+[\w+/]*)/gi;
function linkReplacer(html, replacer, hrefPrefix) {
    const linkPairIndexList = getLinkIndexList(html);
    const tagIndexList = getTagIndexList(html);
    return html.replace(replacer, (match, brackets1, offset) => {
        const rawLinkIndexArray = [offset, offset];
        if (harArrayListOverflow(rawLinkIndexArray, tagIndexList)) {
            return match;
        }
        if (harArrayListOverflow(rawLinkIndexArray, linkPairIndexList)) {
            return match;
        }
        return `<a href="${hrefPrefix}${match}">${match}</a>`;
    });
}
export function makeLinkFromText(html) {
    return linkReplacer(html, linkTextRegExpGlobal, '');
}
export function makeMailFromText(html) {
    return linkReplacer(html, mailTextRegExpGlobal, mailPrefix);
}
//# sourceMappingURL=render-link.js.map