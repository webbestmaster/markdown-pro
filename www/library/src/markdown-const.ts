import {MarkdownConfigType} from './markdown-type';

export const defaultMarkdownConfig: MarkdownConfigType = {
    codeHighlight: (langName: string, code: string): string => code,
    parseLink: true,
    useLineBreak: false,
    useWrapper: true,
    wrapperClassName: 'md-pro',
};

export const mailPrefix = 'mailto:';
