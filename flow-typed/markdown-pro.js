// @flow

declare module 'markdown-pro' {
    declare export type MarkdownConfigType = {|
        +useLineBreak?: boolean,
        +wrapperClassName?: string,
    |};

    declare export default function markdownPro(mdInput: string, config?: MarkdownConfigType): string;

    declare export function markdown(mdInput: string, config?: MarkdownConfigType): string;
}

declare module 'markdown-pro/dist/style.css' {
    declare type StyleType = {};

    declare var style: StyleType;

    declare export default typeof style;
}
