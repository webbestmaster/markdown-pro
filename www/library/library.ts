import './src/markdown.scss';

import {defaultMarkdownConfig, ThemeNameEnum} from './src/markdown-const';

// eslint-disable-next-line import/no-default-export
export {markdown, markdown as default} from './src/markdown';
export {defaultMarkdownConfig, ThemeNameEnum} from './src/markdown-const';

export const classNameMdProThemeDark = 'md-pro-theme-dark';
export const classNameMdProThemeLight = 'md-pro-theme-light';
export const classNameMdPro: string = defaultMarkdownConfig.wrapperClassName;

export type MarkdownConfigType = Readonly<{
    // code highlight
    codeHighlight: (langName: string, code: string) => string;
    // https://exmaple.com -> <a href="https://exmaple.com">https://exmaple.com</a>
    parseLink: boolean;
    // themeName: light | dark | auto (auto - will use current system theme i.e. light or dark)
    // needed class will be added to the wrapper div
    themeName: ThemeNameEnum;
    // make \n => <br/>
    useLineBreak: boolean;
    // use wrapper <div class="md-pro">...</div>
    useWrapper: boolean;
    // additional css class for wrapper
    wrapperClassName: string;
}>;

export type MarkdownConfigShallowType = Readonly<Partial<MarkdownConfigType>>;
