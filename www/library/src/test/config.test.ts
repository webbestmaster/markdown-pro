import assert from 'node:assert/strict';

import {describe, test} from '@jest/globals';

import {markdown, defaultMarkdownConfig, ThemeNameEnum} from '../../library';
import {themeClassNameMap} from '../markdown-const';

describe('Markdown-pro test:config', () => {
    test('Additional css class', () => {
        const additionalCssClass = 'additional-css-class';

        assert.equal(markdown('', {wrapperClassName: additionalCssClass}).includes(additionalCssClass), true);
        assert.equal(
            markdown(''),
            `<div class="${defaultMarkdownConfig.wrapperClassName} ${themeClassNameMap[ThemeNameEnum.auto]}"></div>`
        );
    });
});
