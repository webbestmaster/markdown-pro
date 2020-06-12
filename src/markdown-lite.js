// @flow

import {makeStyledHtml} from './markdown-lite-helper';

type MdlConfigType = {
    // html?: true,
    // xhtmlOut?: true,
    useLineBreak?: boolean,
    // langPrefix?: 'markdown-lang-prefix--',
    // linkify?: false,
    // typographer?: false,
    // quotes?: '“”‘’',
    // highlight?: () => string,
};

type MdlPrefixType = '' | '#' | '##' | '###' | '####' | '#####' | '######';

type MdlLineType = {|
    +prefix: MdlPrefixType,
    +text: string,
|};

const emptyString = '';

const mdlPrefixMap: {[key: MdlPrefixType]: string} = {
    [emptyString]: 'p',
    '#': 'h1',
    '##': 'h2',
    '###': 'h3',
    '####': 'h4',
    '#####': 'h5',
    '######': 'h6',
};

const prefixList: Array<MdlPrefixType> = Object.keys(mdlPrefixMap).sort(
    (keyA: MdlPrefixType, keyB: MdlPrefixType): number => keyB.length - keyA.length
);

const defaultMdlConfig: MdlConfigType = {
    useLineBreak: false, // if true add <br/> to end of line, NO create new tag
};

function isLine(line: string): boolean {
    return line.startsWith('---');
}

function getLinePrefix(line: string): MdlPrefixType {
    // eslint-disable-next-line no-loops/no-loops
    for (const prefix of prefixList) {
        if (line.startsWith(prefix)) {
            return prefix;
        }
    }

    return emptyString;
}

function lineToMdlLine(rawLine: string): MdlLineType {
    const prefix = getLinePrefix(rawLine);
    const text = rawLine.replace(prefix, emptyString).trim().replace(/\s+/g, ' ');

    return {prefix, text};
}

function makeInnerHtml(text: string): string {
    return text.replace(/\s*\\\s*/g, '<br/>');
}

function liteToHtml(rawLine: string): string {
    const {prefix, text} = lineToMdlLine(rawLine);
    const tagName = mdlPrefixMap[prefix];

    if (prefix === emptyString && isLine(text)) {
        return '<hr/>';
    }

    const innerHtml = makeStyledHtml(makeInnerHtml(text));

    return `<${tagName}>${innerHtml}</${tagName}>`;
}

function cleanRawLine(rawLine: string): string {
    return rawLine.trim().replace(/\s+/, ' ');
}

function filterExtraHtmlString(htmlString: string): boolean {
    return htmlString !== '<p></p>' && htmlString !== '<p><br/></p>';
}

export function makeHtml(rawMarkdown: string, config: MdlConfigType = defaultMdlConfig): string {
    const fullConfig: MdlConfigType = {...defaultMdlConfig, ...config};

    let markdown: string = rawMarkdown
        // trim
        .trim()
        // find '\' in end of line
        .replace(/\s*\\\n/g, '\\');

    if (fullConfig.useLineBreak === true) {
        markdown = markdown.replace(/(\S[^\n]*)\n([^\n]*\S)/g, '$1\\$2');
    }

    return markdown.split('\n').map(cleanRawLine).map(liteToHtml).filter(filterExtraHtmlString).join('\n');
}

const md1 = `
    #header1

    ## header2     with left space

    ###    header3 with several left spaces

    line1 - __text *(bold <img/> too)__ **some bold**  here


    _line2_ - *some italic* _text here_ too

    line3 - ~~some text~~    \\
    line3.1 - some text\\
    here too

    line4 - with small
    break line

    ---

    line5 - ~ w~~it~~h ~~~~ ~ ~big

    break line
`;

const md1result = `<h1>header1</h1>
<h2>header2 with left space</h2>
<h3>header3 with several left spaces</h3>
<p>line1 - <strong>text *(bold <img/> too)</strong> <strong>some bold</strong> here</p>
<p><em>line2</em> - <em>some italic</em> <em>text here</em> too</p>
<p>line3 - <strike>some text</strike><br/>line3.1 - some text<br/>here too</p>
<p>line4 - with small</p>
<p>break line</p>
<hr/>
<p>line5 - <sub> w<strike>it</strike>h <strike></strike> </sub> ~big</p>
<p>break line</p>`;

const md2result = `<h1>header1</h1>
<h2>header2 with left space</h2>
<h3>header3 with several left spaces</h3>
<p>line1 - <strong>text *(bold <img/> too)</strong> <strong>some bold</strong> here</p>
<p><em>line2</em> - <em>some italic</em> <em>text here</em> too</p>
<p>line3 - <strike>some text</strike><br/>line3.1 - some text<br/>here too</p>
<p>line4 - with small<br/>break line</p>
<hr/>
<p>line5 - <sub> w<strike>it</strike>h <strike></strike> </sub> ~big</p>
<p>break line</p>`;

console.log(makeHtml(md1));

console.assert(makeHtml(md1) === md1result, 'md1 - default config failed');

console.log(makeHtml(md1, {useLineBreak: true}));

console.assert(makeHtml(md1, {useLineBreak: true}) === md2result, 'md1 - break line');
