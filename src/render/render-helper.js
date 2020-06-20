// @flow

import type {LineDataType, OlAttributeType, SelectorType} from '../parser/parser-type';
import {breakLineTag, emptyString, olNumericType, oLParseDataList, space} from '../parser/parser-const';
import {breakLineRegExp, getHasEndBreakLine} from '../parser/util/string';

export function getOlTypeBySelector(dataLineSelector: SelectorType): OlAttributeType {
    // eslint-disable-next-line no-loops/no-loops
    for (const oLParseData of oLParseDataList) {
        const {selector, olAttributeType} = oLParseData;

        if (dataLineSelector === selector) {
            return olAttributeType;
        }
    }

    console.error('Can not detect ol type by selector', dataLineSelector);

    return olNumericType;
}

export function getOlStart(trimmedLine: string): string {
    const dotIndex = trimmedLine.indexOf('.');

    return trimmedLine.slice(0, dotIndex);
}

// eslint-disable-next-line complexity
export function renderAdditionalLineList(lineData: LineDataType): string {
    const {additionalLineList, useLineBreak} = lineData;

    if (additionalLineList.length === 0) {
        return emptyString;
    }

    const hasParentEndBreakLine = getHasEndBreakLine(lineData.lineContent, useLineBreak);
    const prefix = hasParentEndBreakLine ? breakLineTag : space;
    const additionalLineListLength = additionalLineList.length;
    const additionalLineLastIndex = additionalLineListLength - 1;
    const lineResult: Array<string> = new Array<string>(additionalLineListLength).fill('');

    // eslint-disable-next-line no-loops/no-loops
    for (let lineIndex = 0; lineIndex < additionalLineListLength; lineIndex += 1) {
        const additionalLine = additionalLineList[lineIndex];
        const hasBreakLine = getHasEndBreakLine(additionalLine, useLineBreak);

        if (hasBreakLine) {
            const additionalLineWithoutBreakLine = additionalLine.replace(breakLineRegExp, emptyString);

            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLineWithoutBreakLine;
            } else {
                lineResult[lineIndex] = additionalLineWithoutBreakLine + breakLineTag;
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (lineIndex === additionalLineLastIndex) {
                lineResult[lineIndex] = additionalLine;
            } else {
                lineResult[lineIndex] = additionalLine + space;
            }
        }
    }

    return prefix + lineResult.join(emptyString);
}
