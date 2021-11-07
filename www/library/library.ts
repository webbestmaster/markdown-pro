import './src/markdown.scss';

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

export type MarkdownConfigShallowType = Readonly<Partial<MarkdownConfigType>>;

export {defaultMarkdownConfig} from './src/markdown-const';
// eslint-disable-next-line import/no-default-export
export {markdown, markdown as default} from './src/markdown';
