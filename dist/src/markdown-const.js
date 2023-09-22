export var ThemeNameEnum;
(function (ThemeNameEnum) {
    ThemeNameEnum["auto"] = "auto";
    ThemeNameEnum["dark"] = "dark";
    ThemeNameEnum["light"] = "light";
})(ThemeNameEnum || (ThemeNameEnum = {}));
export const defaultMarkdownConfig = {
    codeHighlight: (langName, code) => {
        return code;
    },
    parseLink: true,
    themeName: ThemeNameEnum.auto,
    useLineBreak: false,
    useWrapper: true,
    wrapperClassName: "md-pro",
};
export const themeClassNameMap = {
    [ThemeNameEnum.auto]: `${defaultMarkdownConfig.wrapperClassName}-theme-${ThemeNameEnum.auto}`,
    [ThemeNameEnum.dark]: `${defaultMarkdownConfig.wrapperClassName}-theme-${ThemeNameEnum.dark}`,
    [ThemeNameEnum.light]: `${defaultMarkdownConfig.wrapperClassName}-theme-${ThemeNameEnum.light}`,
};
export const mailPrefix = "mailto:";
//# sourceMappingURL=markdown-const.js.map