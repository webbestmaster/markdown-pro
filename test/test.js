// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import markdownPro, {markdown} from '../src/markdown';
import type {MarkdownConfigShallowType} from '../src/markdown-type';

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
import {fixtureTable1, fixtureTable2, fixtureTable3} from './fixture/table';
import {fixtureDoNotParseLink, fixtureParseLink} from './fixture/parse-link';
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
    it('Import', () => {
        assert(markdownPro === markdown, 'markdownPro !== {markdown}');
    });

    it('Header', () => {
        assert(mdDoNotBreakLine(fixtureHeader.input) === fixtureHeader.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureHeader.input) === fixtureHeader.outputUseBreakLine);
    });

    it('Paragraph', () => {
        assert(mdDoNotBreakLine(fixtureParagraph.input) === fixtureParagraph.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureParagraph.input) === fixtureParagraph.outputUseBreakLine);
    });

    it('Html', () => {
        assert(mdDoNotBreakLine(fixtureHtml.input) === fixtureHtml.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureHtml.input) === fixtureHtml.outputUseBreakLine);
    });

    it('Line', () => {
        assert(mdDoNotBreakLine(fixtureLine.input) === fixtureLine.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureLine.input) === fixtureLine.outputUseBreakLine);
    });

    it('Pair tag', () => {
        assert(mdDoNotBreakLine(fixturePairTag.input) === fixturePairTag.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixturePairTag.input) === fixturePairTag.outputUseBreakLine);
    });

    it('Unordered List', () => {
        assert(mdDoNotBreakLine(fixtureUnorderedList.input) === fixtureUnorderedList.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureUnorderedList.input) === fixtureUnorderedList.outputUseBreakLine);
    });

    it('Ordered List', () => {
        assert(mdDoNotBreakLine(fixtureOrderedList.input) === fixtureOrderedList.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureOrderedList.input) === fixtureOrderedList.outputUseBreakLine);
    });

    it('Image', () => {
        assert(mdDoNotBreakLine(fixtureImage.input) === fixtureImage.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureImage.input) === fixtureImage.outputUseBreakLine);
    });

    it('Checkbox', () => {
        assert(mdDoNotBreakLine(fixtureCheckbox.input) === fixtureCheckbox.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureCheckbox.input) === fixtureCheckbox.outputUseBreakLine);
    });

    it('Link', () => {
        assert(mdDoNotBreakLine(fixtureLink.input) === fixtureLink.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureLink.input) === fixtureLink.outputUseBreakLine);
    });

    it('Blockquote', () => {
        assert(mdDoNotBreakLine(fixtureBlockquote.input) === fixtureBlockquote.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureBlockquote.input) === fixtureBlockquote.outputUseBreakLine);
    });

    it('Code', () => {
        assert(mdDoNotBreakLine(fixtureCode.input) === fixtureCode.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureCode.input) === fixtureCode.outputUseBreakLine);
    });

    it('Code highlight', () => {
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

        assert(
            markdown(fixtureCodeHighlight.input, configDoNotBreakLine) === fixtureCodeHighlight.outputDoNotBreakLine
        );
        assert(markdown(fixtureCodeHighlight.input, configUseBreakLine) === fixtureCodeHighlight.outputUseBreakLine);
    });

    it('Code highlight: no lang', () => {
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

        assert(
            markdown(fixtureCodeHighlightNoLang.input, configDoNotBreakLine)
                === fixtureCodeHighlightNoLang.outputDoNotBreakLine
        );
        assert(
            markdown(fixtureCodeHighlightNoLang.input, configUseBreakLine)
                === fixtureCodeHighlightNoLang.outputUseBreakLine
        );
    });

    it('Parse link', () => {
        assert(mdDoNotBreakLine(fixtureParseLink.input) === fixtureParseLink.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureParseLink.input) === fixtureParseLink.outputUseBreakLine);
    });

    it('Do NOT parse link', () => {
        const configDoNotBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useLineBreak: true,
            useWrapper: false,
        };

        assert(
            markdown(fixtureDoNotParseLink.input, configDoNotBreakLine) === fixtureDoNotParseLink.outputDoNotBreakLine
        );
        assert(markdown(fixtureDoNotParseLink.input, configUseBreakLine) === fixtureDoNotParseLink.outputUseBreakLine);
    });

    it('Table', () => {
        assert(mdDoNotBreakLine(fixtureTable1.input) === fixtureTable1.output);
        assert(mdUseBreakLine(fixtureTable2.input) === fixtureTable2.output);
        assert(markdown(fixtureTable3.input, {...fixtureTable3.config, useWrapper: false}) === fixtureTable3.output);
    });

    it('Footnote', () => {
        assert(mdDoNotBreakLine(fixtureFootnote.input) === fixtureFootnote.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureFootnote.input) === fixtureFootnote.outputUseBreakLine);
    });

    it('Variables', () => {
        assert(mdDoNotBreakLine(fixtureVariable.input) === fixtureVariable.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureVariable.input) === fixtureVariable.outputUseBreakLine);
    });

    it('Mix 1', () => {
        assert(mdDoNotBreakLine(fixtureMix1.input) === fixtureMix1.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureMix1.input) === fixtureMix1.outputUseBreakLine);
    });
});
