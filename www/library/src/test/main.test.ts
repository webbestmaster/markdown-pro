import assert from 'node:assert/strict';

import {describe, test} from '@jest/globals';

import markdownPro, {markdown, MarkdownConfigShallowType} from '../../library';

import {stringReverse} from './util';

import {fixtureHeader} from './fixture/header';
import {fixtureParagraph} from './fixture/paragraph';
import {fixtureHtml} from './fixture/html';
import {fixtureLine} from './fixture/line';
import {fixturePairTag} from './fixture/pair-tag';
import {fixtureUnorderedList} from './fixture/unordered-list';
import {fixtureOrderedList} from './fixture/ordered-list';
import {fixtureBlockquote} from './fixture/blockquote';
import {fixtureCode, fixtureCodeHighlight, fixtureCodeHighlightNoLang} from './fixture/code';
import {fixtureImage} from './fixture/image';
import {fixtureCheckbox} from './fixture/checkbox';
import {fixtureLink} from './fixture/link';
import {fixtureMail} from './fixture/mail';
import {fixtureTable1, fixtureTable2, fixtureTable3} from './fixture/table';
import {fixtureDoNotParseLink, fixtureParseLink} from './fixture/parse-link';
import {fixtureDoNotParseMail, fixtureParseMail} from './fixture/parse-mail';
import {fixtureMix1} from './fixture/mix-1';
import {fixtureFootnote} from './fixture/footnote';
import {fixtureVariable} from './fixture/variables';

function mdDoNotBreakLine(input: string): string {
    return markdown(input, {useWrapper: false});
}

function mdUseBreakLine(input: string): string {
    const configUseBreakLine: MarkdownConfigShallowType = {
        useLineBreak: true,
        useWrapper: false,
    };

    return markdown(input, configUseBreakLine);
}

// eslint-disable-next-line max-statements
describe('Markdown-pro test', () => {
    test('Import', () => {
        assert.equal(markdownPro, markdown, 'markdownPro !== {markdown}');
    });

    test('Header', () => {
        assert.equal(mdDoNotBreakLine(fixtureHeader.input), fixtureHeader.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureHeader.input), fixtureHeader.outputUseBreakLine);
    });

    test('Paragraph', () => {
        assert.equal(mdDoNotBreakLine(fixtureParagraph.input), fixtureParagraph.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureParagraph.input), fixtureParagraph.outputUseBreakLine);
    });

    test('Html', () => {
        assert.equal(mdDoNotBreakLine(fixtureHtml.input), fixtureHtml.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureHtml.input), fixtureHtml.outputUseBreakLine);
    });

    test('Line', () => {
        assert.equal(mdDoNotBreakLine(fixtureLine.input), fixtureLine.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureLine.input), fixtureLine.outputUseBreakLine);
    });

    test('Pair tag', () => {
        assert.equal(mdDoNotBreakLine(fixturePairTag.input), fixturePairTag.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixturePairTag.input), fixturePairTag.outputUseBreakLine);
    });

    test('Unordered List', () => {
        assert.equal(mdDoNotBreakLine(fixtureUnorderedList.input), fixtureUnorderedList.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureUnorderedList.input), fixtureUnorderedList.outputUseBreakLine);
    });

    test('Ordered List', () => {
        assert.equal(mdDoNotBreakLine(fixtureOrderedList.input), fixtureOrderedList.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureOrderedList.input), fixtureOrderedList.outputUseBreakLine);
    });

    test('Image', () => {
        assert.equal(mdDoNotBreakLine(fixtureImage.input), fixtureImage.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureImage.input), fixtureImage.outputUseBreakLine);
    });

    test('Checkbox', () => {
        assert.equal(mdDoNotBreakLine(fixtureCheckbox.input), fixtureCheckbox.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureCheckbox.input), fixtureCheckbox.outputUseBreakLine);
    });

    test('Link', () => {
        assert.equal(mdDoNotBreakLine(fixtureLink.input), fixtureLink.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureLink.input), fixtureLink.outputUseBreakLine);
    });

    test('Mail', () => {
        assert.equal(mdDoNotBreakLine(fixtureMail.input), fixtureMail.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureMail.input), fixtureMail.outputUseBreakLine);
    });

    test('Blockquote', () => {
        assert.equal(mdDoNotBreakLine(fixtureBlockquote.input), fixtureBlockquote.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureBlockquote.input), fixtureBlockquote.outputUseBreakLine);
    });

    test('Code', () => {
        assert.equal(mdDoNotBreakLine(fixtureCode.input), fixtureCode.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureCode.input), fixtureCode.outputUseBreakLine);
    });

    test('Code highlight', () => {
        function codeHighlight(langName: string, code: string): string {
            if (langName !== fixtureCodeHighlight.langName) {
                throw new Error('codeHighlight: wrong langName');
            }

            if (code !== fixtureCodeHighlight.code) {
                throw new Error('codeHighlight: wrong code');
            }

            return stringReverse(code);
        }

        const configDoNotBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useLineBreak: true,
            useWrapper: false,
        };

        assert.equal(
            markdown(fixtureCodeHighlight.input, configDoNotBreakLine),
            fixtureCodeHighlight.outputDoNotBreakLine
        );
        assert.equal(markdown(fixtureCodeHighlight.input, configUseBreakLine), fixtureCodeHighlight.outputUseBreakLine);
    });

    test('Code highlight: no lang', () => {
        function codeHighlight(langName: string, code: string): string {
            if (langName !== fixtureCodeHighlightNoLang.langName) {
                throw new Error('codeHighlight - no lang: wrong langName');
            }

            if (code !== fixtureCodeHighlightNoLang.code) {
                throw new Error('codeHighlight - no lang: wrong code');
            }

            return stringReverse(code);
        }

        const configDoNotBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useLineBreak: true,
            useWrapper: false,
        };

        assert.equal(
            markdown(fixtureCodeHighlightNoLang.input, configDoNotBreakLine),
            fixtureCodeHighlightNoLang.outputDoNotBreakLine
        );
        assert.equal(
            markdown(fixtureCodeHighlightNoLang.input, configUseBreakLine),
            fixtureCodeHighlightNoLang.outputUseBreakLine
        );
    });

    test('Parse link', () => {
        assert.equal(mdDoNotBreakLine(fixtureParseLink.input), fixtureParseLink.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureParseLink.input), fixtureParseLink.outputUseBreakLine);
    });

    test('Parse Mail', () => {
        assert.equal(mdDoNotBreakLine(fixtureParseMail.input), fixtureParseMail.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureParseMail.input), fixtureParseMail.outputUseBreakLine);
    });

    test('Do NOT parse link', () => {
        const configDoNotBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useLineBreak: true,
            useWrapper: false,
        };

        assert.equal(
            markdown(fixtureDoNotParseLink.input, configDoNotBreakLine),
            fixtureDoNotParseLink.outputDoNotBreakLine
        );
        assert.equal(
            markdown(fixtureDoNotParseLink.input, configUseBreakLine),
            fixtureDoNotParseLink.outputUseBreakLine
        );
    });

    test('Do NOT parse mail', () => {
        const configDoNotBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useLineBreak: true,
            useWrapper: false,
        };

        assert.equal(
            markdown(fixtureDoNotParseMail.input, configDoNotBreakLine),
            fixtureDoNotParseMail.outputDoNotBreakLine
        );
        assert.equal(
            markdown(fixtureDoNotParseMail.input, configUseBreakLine),
            fixtureDoNotParseMail.outputUseBreakLine
        );
    });

    test('Table', () => {
        assert.equal(mdDoNotBreakLine(fixtureTable1.input), fixtureTable1.output);
        assert.equal(mdUseBreakLine(fixtureTable2.input), fixtureTable2.output);
        assert.equal(
            markdown(fixtureTable3.input, {
                ...fixtureTable3.config,
                useWrapper: false,
            }),
            fixtureTable3.output
        );
    });

    test('Footnote', () => {
        assert.equal(mdDoNotBreakLine(fixtureFootnote.input), fixtureFootnote.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureFootnote.input), fixtureFootnote.outputUseBreakLine);
    });

    test('Variables', () => {
        assert.equal(mdDoNotBreakLine(fixtureVariable.input), fixtureVariable.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureVariable.input), fixtureVariable.outputUseBreakLine);
    });

    test('Mix 1', () => {
        assert.equal(mdDoNotBreakLine(fixtureMix1.input), fixtureMix1.outputDoNotBreakLine);
        assert.equal(mdUseBreakLine(fixtureMix1.input), fixtureMix1.outputUseBreakLine);
    });
});
