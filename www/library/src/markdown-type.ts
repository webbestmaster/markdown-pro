export type MarkdownConfigShallowType = Readonly<{
    codeHighlight?: (langName: string, code: string) => string;
    parseLink?: boolean;
    useLineBreak?: boolean;
    useWrapper?: boolean;
    wrapperClassName?: string;
}>;

export type MarkdownConfigType = Readonly<{
    // code highlight
    codeHighlight: (langName: string, code: string) => string;
    // https://exmaple.com -> <a href="https://exmaple.com">https://exmaple.com</a>
    parseLink: boolean;
    // make \n => <br/>
    useLineBreak: boolean;
    // use wrapper <div class="md-pro">...</div>
    useWrapper: boolean;
    // additional css class for wrapper
    wrapperClassName: string;
}>;
