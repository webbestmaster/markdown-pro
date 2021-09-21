import './src/markdown.scss';
import { markdown } from './src/markdown';
import { defaultMarkdownConfig } from './src/markdown-const';
export declare type MarkdownConfigType = Readonly<{
    codeHighlight: (langName: string, code: string) => string;
    parseLink: boolean;
    useLineBreak: boolean;
    useWrapper: boolean;
    wrapperClassName: string;
}>;
export declare type MarkdownConfigShallowType = Readonly<Partial<MarkdownConfigType>>;
export { markdown, defaultMarkdownConfig };
export default markdown;

declare module 'markdown-pro/dist/style.css' {
    type StyleType = Record<string, string>;

    const style: StyleType;

    export default style;
}
