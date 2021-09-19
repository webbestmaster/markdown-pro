/* global describe, it */

import assert from 'assert';

import {markdown, defaultMarkdownConfig} from '../../library';

describe('Markdown-pro test:config', () => {
    it('Additional css class', () => {
        const additionalCssClass = 'additional-css-class';

        assert(markdown('', {wrapperClassName: additionalCssClass}).includes(additionalCssClass));
        assert(markdown('') === `<div class="${defaultMarkdownConfig.wrapperClassName}"></div>`);
    });
});
