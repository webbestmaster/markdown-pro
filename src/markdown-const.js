// @flow

import type {MarkdownConfigType} from './markdown-type';

export const defaultMarkdownConfig: MarkdownConfigType = {
    useLineBreak: false,
    wrapperClassName: 'md-pro',
    codeHighlight: (langName: string, code: string): string => code,
};
