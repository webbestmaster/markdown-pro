declare module 'markdown-pro' {
    export interface MarkdownConfigType {
        useLineBreak?: boolean,
        wrapperClassName?: string,
        parseLink?: boolean,
        codeHighlight?: (langName: string, code: string) => string,
        useWrapper?: boolean,
    }

    export default function markdownPro(mdInput: string, config?: MarkdownConfigType): string;

    export function markdown(mdInput: string, config?: MarkdownConfigType): string;
}

declare module 'markdown-pro/dist/style.css' {
    type StyleType = {};

    const style: StyleType;

    export default style;
}
