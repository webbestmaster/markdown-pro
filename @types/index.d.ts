declare module 'markdown-pro' {
    export type MarkdownConfigType = {
        useLineBreak?: boolean,
        wrapperClassName?: string,
        parseLink?: boolean,
        codeHighlight?: (langName: string, code: string) => string,
    };

    export default function markdownPro(mdInput: string, config?: MarkdownConfigType): string;

    export function markdown(mdInput: string, config?: MarkdownConfigType): string;
}

declare module 'markdown-pro/dist/style.css' {
    type StyleType = {};

    const style: StyleType;

    export default style;
}
