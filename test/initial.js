// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            const array: Array<number> = [1, 2, 3];

            assert(!array.includes(4), '-1');
        });
    });
});
