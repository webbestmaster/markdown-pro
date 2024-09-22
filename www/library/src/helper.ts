import type {MarkdownConfigType} from "../library";
import {defaultMarkdownConfig, themeClassNameMap} from "./markdown-const";

export function getFullWrapperClassName(markdownConfig: MarkdownConfigType): string {
    const {wrapperClassName: wrapperClassNameConfig, themeName} = markdownConfig;
    const {wrapperClassName: wrapperClassNameDefault} = defaultMarkdownConfig;

    const wrapperClassName: string =
        wrapperClassNameConfig === wrapperClassNameDefault
            ? wrapperClassNameDefault
            : `${wrapperClassNameDefault} ${wrapperClassNameConfig}`;

    const themeClassName: string = themeClassNameMap[themeName];

    return `${wrapperClassName} ${themeClassName}`;
}
