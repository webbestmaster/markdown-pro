import './src/markdown.scss';
export { markdown, markdown as default } from './src/markdown';
export { defaultMarkdownConfig, ThemeNameEnum } from './src/markdown-const';
import { ThemeNameEnum } from './src/markdown-const';
export type MarkdownConfigType = Readonly<{
    codeHighlight: (langName: string, code: string) => string;
    parseLink: boolean;
    themeName: ThemeNameEnum;
    useLineBreak: boolean;
    useWrapper: boolean;
    wrapperClassName: string;
}>;
export type MarkdownConfigShallowType = Readonly<Partial<MarkdownConfigType>>;

declare module 'markdown-pro/dist/style.css' {
    type StyleType = Record<string, string>;

    const style: StyleType;

    export default style;
}
