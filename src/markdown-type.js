// @flow

export type MarkdownConfigShallowType = {|
    +useLineBreak?: boolean,
    +wrapperClassName?: string,
    +parseLink?: boolean,
    +codeHighlight?: (langName: string, code: string) => string,
|};

export type MarkdownConfigType = {|
    +useLineBreak: boolean,
    +wrapperClassName: string,
    +parseLink: boolean,
    +codeHighlight: (langName: string, code: string) => string,
|};
