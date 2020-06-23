// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import markdownPro, {markdown} from '../dist';
import type {MarkdownConfigShallowType} from '../src/markdown-type';

import {fixtureHeader} from './fixture/header';
import {unwrap} from './util';

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
});
