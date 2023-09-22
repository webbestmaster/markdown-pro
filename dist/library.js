import "./src/markdown.scss";
import { defaultMarkdownConfig } from "./src/markdown-const";
// eslint-disable-next-line import/no-default-export
export { markdown, markdown as default } from "./src/markdown";
export { defaultMarkdownConfig, ThemeNameEnum } from "./src/markdown-const";
// eslint-disable-next-line unicorn/no-keyword-prefix
export const classNameMdProThemeDark = "md-pro-theme-dark";
// eslint-disable-next-line unicorn/no-keyword-prefix
export const classNameMdProThemeLight = "md-pro-theme-light";
// eslint-disable-next-line unicorn/no-keyword-prefix
export const classNameMdPro = defaultMarkdownConfig.wrapperClassName;
//# sourceMappingURL=library.js.map