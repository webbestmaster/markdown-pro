// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import markdownPro, {markdown} from '../dist';

import {fixtureHeader, unorderedList} from './fixture';

describe('Array', () => {
    describe('Imports', () => {
        it('import markdownPro === import {markdown}', () => {
            assert(markdownPro === markdown, 'markdownPro !== {markdown}');
        });
    });

    describe('Header', () => {
        it('Should parse headers', () => {
            assert(markdown(fixtureHeader.input) === fixtureHeader.output, 'Parse header with error');
        });
    });

    describe.only('Unordered list', () => {
        it('Should parse unordered list', () => {
            console.log('markdown(unorderedList.input)');
            console.log(markdown(unorderedList.input));

            assert(markdown(unorderedList.input) === unorderedList.output, 'Parse unordered with error');
        });
    });
});
