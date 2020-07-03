// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import {markdown} from '../src/markdown';
describe('Markdown-pro test:config', () => {
    it('Additional css class', () => {
        const additionalCssClass = 'additional-css-class';

        assert(markdown('', {wrapperClassName: additionalCssClass}).includes(additionalCssClass));
    });
});
