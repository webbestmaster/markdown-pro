// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import {markdown} from '../src/markdown';

import {fixtureHeader, unorderedList} from './fixture';

describe('Array', () => {
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
