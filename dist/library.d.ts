import "./src/markdown.scss";
import { type ThemeNameEnum } from "./src/markdown-const";
export { markdown, markdown as default } from "./src/markdown";
export { defaultMarkdownConfig, ThemeNameEnum } from "./src/markdown-const";
export declare const classNameMdProThemeDark = "md-pro-theme-dark";
export declare const classNameMdProThemeLight = "md-pro-theme-light";
export declare const classNameMdPro: string;
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
