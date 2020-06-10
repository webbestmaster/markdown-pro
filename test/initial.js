// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import {markdown} from '../src/markdown';

import {fixtureHeader} from './fixture';

describe('Array', () => {
    describe('indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            const array: Array<number> = [1, 2, 3];

            assert(!array.includes(4), '-1');
        });
    });

    describe('Header', () => {
        it('Should parse headers', () => {
            console.log(markdown(fixtureHeader.input));

            assert(markdown(fixtureHeader.input) === fixtureHeader.output, 'Parse header with error');
        });
    });
});
