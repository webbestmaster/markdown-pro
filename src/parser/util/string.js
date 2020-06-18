// @flow

import {emptyString} from '../parser-const';

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

const findImageRegExpGlobal = /!\[([\S\s]*?)]\((\S+)(?:\s+"([\S\s]+?)")?\)/g;

export function makeImage(html: string): string {
    return html.replace(findImageRegExpGlobal, imageReplacer);
}

export function isImageListOnly(lineContent: string): boolean {
    return lineContent.replace(findImageRegExpGlobal, '').trim() === emptyString;
}
