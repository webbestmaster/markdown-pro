// @flow

import {emptyString, pairTagSelectorList} from '../parser-const';
import type {PairTagSelectorType} from '../parser-type';

export function cleanLine(line: string): string {
    return line.trim().replace(/\s+/g, ' ');
}

export function getIsAllSymbolsEqual(line: string): boolean {
    const [firstSymbol] = line;

    return line.split(firstSymbol).join('').length === 0;
}

export const breakLineRegExp = /\s*?\\$/;

export function addBreakLine(line: string): string {
    return line.replace(breakLineRegExp, '<br/>');
}

export function removeEndBreakLine(line: string): string {
    return line.replace(breakLineRegExp, emptyString);
}

export function getHasEndBreakLine(lineContent: string, useLineBreak: boolean): boolean {
    return useLineBreak || breakLineRegExp.test(lineContent);
}

export const htmlPairTag = /<(\w+)[^>]*>[\S\s]*?<\/\1>/;
export const htmlSingleTag = /<\w+[^>]*?\s*\/>/;

function imageReplacer(matchedString: string, alt: mixed, src: string, title: mixed): string {
    const titleAttrValue = typeof title === 'string' ? ' title="' + title + '"' : '';
    const altAttrValue = typeof alt === 'string' ? ' alt="' + alt + '"' : '';

    return `<img loading="lazy" src="${src}"${altAttrValue}${titleAttrValue}/>`;
}

const findImageRegExpGlobal = /!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;

export function makeImage(html: string): string {
    return html.replace(findImageRegExpGlobal, imageReplacer);
}

export function isImageListOnly(lineContent: string): boolean {
    return lineContent.replace(findImageRegExpGlobal, '').trim() === emptyString;
}

const findLinkRegExpGlobal = /\[([\S\s]*?)]\((\S+?)\)/g;

function linkReplacer(matchedString: string, linkText: string, href: string): string {
    const text = linkText.length > 0 ? linkText : href;

    return `<a href="${href}">${text}</a>`;
}

export function makeLink(html: string): string {
    return html.replace(findLinkRegExpGlobal, linkReplacer);
}

function canBeWrapper(html: string): boolean {
    const openTagList = html.match(/<[^/]*?>/g) || []; // open tags
    const closeTagList = html.match(/<\/\S*?>/g) || []; // close tags

    return openTagList.length === closeTagList.length;
}

function appPairTag(html: string, pairTagSelector: PairTagSelectorType): string {
    const {selector, openTag, closeTag} = pairTagSelector;

    const chunkList = html.split(selector);

    // no selector include
    if (chunkList.length === 1) {
        return html;
    }

    const validatedChunkList: Array<string> = [];

    let candidate = '';

    let isTagOpen = false;

    // eslint-disable-next-line no-loops/no-loops
    for (const chunk of chunkList) {
        if (isTagOpen) {
            candidate += chunk;
            if (canBeWrapper(candidate)) {
                validatedChunkList.push(candidate);
                isTagOpen = false;
                candidate = '';
            }
        } else {
            validatedChunkList.push(chunk);
            isTagOpen = true;
        }
    }

    return validatedChunkList
        .map((chunk: string, chunkIndex: number): string => {
            if (chunkIndex % 2 === 0) {
                return chunk;
            }

            // check for unclosed 'tag'
            if (validatedChunkList.length - 1 === chunkIndex) {
                return selector + chunk;
            }

            return openTag + chunk + closeTag;
        })
        .join(emptyString);
}

export function makePairTag(html: string): string {
    let result = html;

    pairTagSelectorList.forEach((pairTagSelector: PairTagSelectorType) => {
        result = appPairTag(result, pairTagSelector);
    });

    return result;
}
