// @flow

// styling

import {emptyString} from './parser/parser-const';

type StyleConfigType = {|
    +tagName: string,
    +patterList: Array<string>,
|};

const styleConfigList: Array<StyleConfigType> = [
    {
        tagName: 'strong',
        patterList: ['__', '**'],
    },
    {
        tagName: 'strike',
        patterList: ['~~'],
    },
    {
        tagName: 'em',
        patterList: ['_', '*'],
    },
    {
        tagName: 'sub',
        patterList: ['~'],
    },
];

function canBeWrapper(html: string): boolean {
    const openTagList = html.match(/<[^/]*?>/g) || []; // open tags
    const closeTagList = html.match(/<\/\S*?>/g) || []; // close tags

    return openTagList.length === closeTagList.length;
}

function wrapMdByPattern(mdString: string, tagName: string, pattern: string): string {
    const partList = mdString.split(pattern);
    const partListLength = partList.length;
    const unclosedPartIndex = partListLength - 1;
    const resultList = [];

    // eslint-disable-next-line no-loops/no-loops
    for (let partIndex = 0; partIndex < partListLength; partIndex += 1) {
        const part = partList[partIndex];

        if (partIndex % 2 === 0) {
            resultList.push(part);
            // eslint-disable-next-line no-continue
            continue;
        }

        // check for unclosed 'tag'
        if (unclosedPartIndex === partIndex) {
            resultList.push(pattern + part);
            // eslint-disable-next-line no-continue
            continue;
        }

        if (canBeWrapper(part)) {
            resultList.push(`<${tagName}>${part}</${tagName}>`);
            // eslint-disable-next-line no-continue
            continue;
        }

        resultList.push(pattern + part);
    }

    return resultList.join(emptyString);
}

function wrapMdByPatternList(mdString: string, tagName: string, patternList: Array<string>): string {
    let result = mdString;

    // eslint-disable-next-line no-loops/no-loops
    for (const pattern of patternList) {
        result = wrapMdByPattern(result, tagName, pattern);
    }

    return result;
}

export function makeStyledHtml(html: string): string {
    let result = html;

    // eslint-disable-next-line no-loops/no-loops
    for (const styleConfig of styleConfigList) {
        result = wrapMdByPatternList(result, styleConfig.tagName, styleConfig.patterList);
    }

    return result;
}
