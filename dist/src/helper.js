import { themeClassNameMap, defaultMarkdownConfig } from './markdown-const';
export function getFullWrapperClassName(markdownConfig) {
    const { wrapperClassName: wrapperClassNameConfig, themeName } = markdownConfig;
    const { wrapperClassName: wrapperClassNameDefault } = defaultMarkdownConfig;
    const wrapperClassName = wrapperClassNameConfig === wrapperClassNameDefault
        ? wrapperClassNameDefault
        : `${wrapperClassNameDefault} ${wrapperClassNameConfig}`;
    const themeClassName = themeClassNameMap[themeName];
    return `${wrapperClassName} ${themeClassName}`;
}
//# sourceMappingURL=helper.js.map