// @flow

import markdownPro from 'markdown-pro';
import markdownProStyle from 'markdown-pro/dist/style.css';
// import markdownPro, {markdown} from '../src/markdown';

import {formatHtml} from './util';

export function init(input: HTMLTextAreaElement, output: HTMLDivElement, outputDebug: HTMLPreElement) {
    function handleInput() {
        const inputValue = input.value;

        const markdownHtml = markdownPro(inputValue, {useLineBreak: false, wrapperClassName: 'test-class'});

        // eslint-disable-next-line no-param-reassign
        output.innerHTML = markdownHtml;
        // eslint-disable-next-line no-param-reassign
        outputDebug.textContent = formatHtml(markdownHtml);
    }

    input.addEventListener('input', handleInput, false);
}
