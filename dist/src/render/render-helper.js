import { olNumericType, oLParseDataList } from '../parser/parser-selector';
import { hasEmailSymbol, hasStringNonEmptySymbols } from '../parser/util/is';
import { makeFootnoteSuper } from '../parser/footnote/footnote';
import { mailPrefix } from '../markdown-const';
import { breakLineTag, emptyString, space } from './render-const';
import { makeLinkFromText, makeMailFromText } from './render-link';
import { makePairTag } from './render-pair-tag';
export const breakLineRegExp = /\s*?\\$/;
export function addBreakLine(line) {
    return line.replace(breakLineRegExp, '<br/>');
}
export function removeEndBreakLine(line) {
    return line.replace(breakLineRegExp, emptyString);
}
export function getHasEndBreakLine(lineContent, useLineBreak) {
    return useLineBreak || breakLineRegExp.test(lineContent);
}
function imageReplacer(matchedString, alt, src, title) {
    const titleAndOtherAttrValue = hasStringNonEmptySymbols(title) ? ' title="' + title + '"' : '';
    const altAttrValue = hasStringNonEmptySymbols(alt) ? ' alt="' + alt + '"' : '';
    return `<img loading="lazy" src="${src}"${altAttrValue}${titleAndOtherAttrValue}/>`;
}
function imageReplacerVariable(matchedString, alt, srcVariable, documentMeta) {
    const altAttrValue = hasStringNonEmptySymbols(alt) ? ' alt="' + alt + '"' : '';
    const { variable } = documentMeta;
    if (srcVariable in variable) {
        return `<img loading="lazy" src="${variable[srcVariable].value}"${altAttrValue}/>`;
    }
    return `<img loading="lazy" src="${srcVariable}"${altAttrValue}/>`;
}
const findImageRegExpGlobal = /!\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;
const findImageVariableRegExpGlobal = /!\[([\S\s]*?)]\[([\S\s]+?)]/g;
export function makeImage(html, documentMeta) {
    return html
        .replace(findImageRegExpGlobal, imageReplacer)
        .replace(findImageVariableRegExpGlobal, (matchedString, alt, srcVariable) => {
        return imageReplacerVariable(matchedString, alt, srcVariable, documentMeta);
    });
}
const findCheckboxCheckedRegExoGlobal = /\[x]/gi;
const findCheckboxUncheckedRegExoGlobal = /\[\s]/g;
export function makeCheckbox(html) {
    return html
        .replace(findCheckboxCheckedRegExoGlobal, '<input type="checkbox" checked="checked" disabled="disabled"/>')
        .replace(findCheckboxUncheckedRegExoGlobal, '<input type="checkbox" disabled="disabled"/>');
}
export function isImageListOnly(lineContent) {
    return lineContent.replace(findImageRegExpGlobal, '').trim() === emptyString;
}
const findMailRegExpGlobal = /\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?(?:\s+"([\S\s]+?)")?\)/g;
const findLinkRegExpGlobal = /\[([\S\s]*?)]\((\S+?)(?:\s+"([\S\s]+?)")?\)/g;
const findLinkVariableRegExpGlobal = /\[([\S\s]*?)]\[([\S\s]+?)]/g;
function mailReplacer(matchedString, linkText, href, title, subject) {
    const titleAttrValue = hasStringNonEmptySymbols(title) ? ' title="' + title + '"' : '';
    const subjectValue = hasStringNonEmptySymbols(subject) ? '?subject=' + subject : '';
    const text = linkText.length > 0 ? linkText : href;
    if (hasEmailSymbol(matchedString)) {
        return `<a href="${mailPrefix}${href}${subjectValue}"${titleAttrValue}>${text}</a>`;
    }
    // leave it for link
    return matchedString;
}
function linkReplacer(matchedString, linkText, href, title) {
    const titleAttrValue = hasStringNonEmptySymbols(title) ? ' title="' + title + '"' : '';
    const text = linkText.length > 0 ? linkText : href;
    return `<a href="${href}"${titleAttrValue}>${text}</a>`;
}
function getMailToPrefix(href) {
    return hasEmailSymbol(href) ? mailPrefix : '';
}
function linkReplacerVariable(matchedString, linkText, hrefVariable, documentMeta) {
    const { variable } = documentMeta;
    if (hrefVariable in variable) {
        const href = variable[hrefVariable].value;
        const textVariable = linkText.length > 0 ? linkText : href;
        return `<a href="${getMailToPrefix(href)}${href}">${textVariable}</a>`;
    }
    const text = linkText.length > 0 ? linkText : hrefVariable;
    return `<a href="${getMailToPrefix(hrefVariable)}${hrefVariable}">${text}</a>`;
}
function defineVariables(html, documentMeta) {
    return html.replace(findLinkVariableRegExpGlobal, (matchedString, linkText, hrefVariable) => {
        return linkReplacerVariable(matchedString, linkText, hrefVariable, documentMeta);
    });
}
export function makeMail(html) {
    return html.replace(findMailRegExpGlobal, mailReplacer);
}
export function makeLink(html) {
    return html.replace(findLinkRegExpGlobal, linkReplacer);
}
export function getOlTypeBySelector(dataLineSelector) {
    // eslint-disable-next-line no-loops/no-loops
    for (const oLParseData of oLParseDataList) {
        const { selector, olAttributeType } = oLParseData;
        if (dataLineSelector === selector) {
            return olAttributeType;
        }
    }
    // console.error('Can not detect ol type by selector', dataLineSelector);
    return olNumericType;
}
export function getOlStart(trimmedLine) {
    const dotIndex = trimmedLine.indexOf('.');
    return trimmedLine.slice(0, dotIndex);
}
// eslint-disable-next-line complexity, max-statements
export function renderAdditionalLineList(lineData) {
    const { additionalLineList, config } = lineData;
    const { lineContent } = lineData;
    const { useLineBreak } = config;
    if (additionalLineList.length === 0) {
        return emptyString;
    }
    const hasParentEndBreakLine = getHasEndBreakLine(lineContent, useLineBreak);
    const prefix = hasParentEndBreakLine ? breakLineTag : space;
    const additionalLineListLength = additionalLineList.length;
    const additionalLineLastIndex = additionalLineListLength - 1;
    const lineResult = Array.from({ length: additionalLineListLength }).fill('');
    // eslint-disable-next-line no-loops/no-loops
    for (let lineIndex = 0; lineIndex < additionalLineListLength; lineIndex += 1) {
        const additionalLine = additionalLineList[lineIndex];
        const hasBreakLine = getHasEndBreakLine(additionalLine, useLineBreak);
        if (hasBreakLine) {
            const additionalLineWithoutBreakLine = additionalLine.replace(breakLineRegExp, emptyString);
            lineResult[lineIndex] =
                lineIndex === additionalLineLastIndex
                    ? additionalLineWithoutBreakLine
                    : additionalLineWithoutBreakLine + breakLineTag;
        }
        else {
            // eslint-disable-next-line no-lonely-if
            lineResult[lineIndex] = lineIndex === additionalLineLastIndex ? additionalLine : additionalLine + space;
        }
    }
    return prefix + lineResult.join(emptyString);
}
export function renderInlineHtml(html, documentMeta) {
    const { config } = documentMeta;
    const { parseLink } = config;
    let fullLineContent = makeFootnoteSuper(html, documentMeta);
    fullLineContent = makeImage(fullLineContent, documentMeta);
    fullLineContent = makeMail(fullLineContent);
    if (parseLink) {
        fullLineContent = makeMailFromText(fullLineContent);
    }
    fullLineContent = makeLink(fullLineContent);
    if (parseLink) {
        fullLineContent = makeLinkFromText(fullLineContent);
    }
    fullLineContent = defineVariables(fullLineContent, documentMeta);
    fullLineContent = makeCheckbox(fullLineContent);
    return makePairTag(fullLineContent);
}
//# sourceMappingURL=render-helper.js.map