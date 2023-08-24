import type {MarkdownConfigType} from "../library";

export enum ThemeNameEnum {
    auto = "auto",
    dark = "dark",
    light = "light",
}

export const defaultMarkdownConfig: MarkdownConfigType = {
    codeHighlight: (langName: string, code: string): string => {
        return code;
    },
    parseLink: true,
    themeName: ThemeNameEnum.auto,
    useLineBreak: false,
    useWrapper: true,
    wrapperClassName: "md-pro",
};

export const themeClassNameMap: Record<ThemeNameEnum, string> = {
    [ThemeNameEnum.auto]: `${defaultMarkdownConfig.wrapperClassName}-theme-${ThemeNameEnum.auto}`,
    [ThemeNameEnum.dark]: `${defaultMarkdownConfig.wrapperClassName}-theme-${ThemeNameEnum.dark}`,
    [ThemeNameEnum.light]: `${defaultMarkdownConfig.wrapperClassName}-theme-${ThemeNameEnum.light}`,
};

export const mailPrefix = "mailto:";
