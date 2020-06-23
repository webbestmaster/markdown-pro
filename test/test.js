// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import markdownPro, {markdown} from '../dist';
import type {MarkdownConfigShallowType} from '../src/markdown-type';

import {unwrap} from './util';

import {fixtureHeader} from './fixture/header';
import {fixtureParagraph} from './fixture/paragraph';
import {fixtureHtml} from './fixture/html';
import {fixtureLine} from './fixture/line';
import {fixturePairTag} from './fixture/pair-tag';

function mdDoNoBreakLine(input: string): string {
    // use default config
    return unwrap(markdown(input));
}

function mdUseBreakLine(input: string): string {
    const configUseBreakLine: MarkdownConfigShallowType = {
        useLineBreak: true,
    };

    return unwrap(markdown(input, configUseBreakLine));
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
});
