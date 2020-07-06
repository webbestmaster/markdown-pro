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
import {fixtureMix1} from './fixture/mix-1';
import {fixtureDoNotParseLink, fixtureParseLink} from './fixture/parse-link';

function mdDoNoBreakLine(input: string): string {
    return markdown(input, {useWrapper: false});
}

function mdUseBreakLine(input: string): string {
    const configUseBreakLine: MarkdownConfigShallowType = {
        useLineBreak: true,
        useWrapper: false,
    };

    return markdown(input, configUseBreakLine);
}

describe('Markdown-pro test', () => {
    it('Import', () => {
        assert(markdownPro === markdown, 'markdownPro !== {markdown}');
    });

    it('Header', () => {
        assert(mdDoNoBreakLine(fixtureHeader.input) === fixtureHeader.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureHeader.input) === fixtureHeader.outputUseBreakLine);
    });

    it('Paragraph', () => {
        assert(mdDoNoBreakLine(fixtureParagraph.input) === fixtureParagraph.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureParagraph.input) === fixtureParagraph.outputUseBreakLine);
    });

    it('Html', () => {
        assert(mdDoNoBreakLine(fixtureHtml.input) === fixtureHtml.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureHtml.input) === fixtureHtml.outputUseBreakLine);
    });

    it('Line', () => {
        assert(mdDoNoBreakLine(fixtureLine.input) === fixtureLine.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureLine.input) === fixtureLine.outputUseBreakLine);
    });

    it('Pair tag', () => {
        assert(mdDoNoBreakLine(fixturePairTag.input) === fixturePairTag.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixturePairTag.input) === fixturePairTag.outputUseBreakLine);
    });

    it('Unordered List', () => {
        assert(mdDoNoBreakLine(fixtureUnorderedList.input) === fixtureUnorderedList.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureUnorderedList.input) === fixtureUnorderedList.outputUseBreakLine);
    });

    it('Ordered List', () => {
        assert(mdDoNoBreakLine(fixtureOrderedList.input) === fixtureOrderedList.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureOrderedList.input) === fixtureOrderedList.outputUseBreakLine);
    });

    it('Image', () => {
        assert(mdDoNoBreakLine(fixtureImage.input) === fixtureImage.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureImage.input) === fixtureImage.outputUseBreakLine);
    });

    it('Checkbox', () => {
        assert(mdDoNoBreakLine(fixtureCheckbox.input) === fixtureCheckbox.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureCheckbox.input) === fixtureCheckbox.outputUseBreakLine);
    });

    it('Link', () => {
        assert(mdDoNoBreakLine(fixtureLink.input) === fixtureLink.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureLink.input) === fixtureLink.outputUseBreakLine);
    });

    it('Blockquote', () => {
        assert(mdDoNoBreakLine(fixtureBlockquote.input) === fixtureBlockquote.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureBlockquote.input) === fixtureBlockquote.outputUseBreakLine);
    });

    it('Code', () => {
        assert(mdDoNoBreakLine(fixtureCode.input) === fixtureCode.outputDoNotBreakLine);
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
        assert(mdDoNoBreakLine(fixtureParseLink.input) === fixtureParseLink.outputDoNotBreakLine);
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

    it('Mix 1', () => {
        assert(mdDoNoBreakLine(fixtureMix1.input) === fixtureMix1.outputDoNotBreakLine);
        assert(mdUseBreakLine(fixtureMix1.input) === fixtureMix1.outputUseBreakLine);
    });
});
