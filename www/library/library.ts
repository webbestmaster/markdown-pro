import "./src/markdown.scss";

import {defaultMarkdownConfig, type ThemeNameEnum} from "./src/markdown-const";

export {markdown as default, markdown} from "./src/markdown";
export {defaultMarkdownConfig, ThemeNameEnum} from "./src/markdown-const";

export const classNameMdProThemeDark = "md-pro-theme-dark";
export const classNameMdProThemeLight = "md-pro-theme-light";
export const classNameMdPro: string = defaultMarkdownConfig.wrapperClassName;

export type MarkdownConfigType = Readonly<{
    // Code highlight
    codeHighlight: (langName: string, code: string) => string;
    // https://exmaple.com -> <a href="https://exmaple.com">https://exmaple.com</a>
    parseLink: boolean;
    // The themeName: light | dark | auto (auto - will use current system theme i.e. light or dark), needed class will be added to the wrapper div
    themeName: ThemeNameEnum;
    // Make \n => <br/>
    useLineBreak: boolean;
    // Use wrapper <div class="md-pro">...</div>
    useWrapper: boolean;
    // Additional css class for wrapper
    wrapperClassName: string;
}>;

export type MarkdownConfigShallowType = Readonly<Partial<MarkdownConfigType>>;
