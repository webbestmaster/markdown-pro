// @flow

// import markdownPro from 'markdown-pro';
// import markdownProStyle from 'markdown-pro/dist/style.css';
import markdownPro, {markdown} from '../src/markdown';

import {formatHtml} from './util';

export function init(
    textArea: HTMLTextAreaElement,
    output: HTMLDivElement,
    outputDebug: HTMLPreElement,
    useLineBreak: HTMLInputElement
) {
    function handleInput() {
        const inputValue = textArea.value;

        const markdownHtml = markdownPro(inputValue, {useLineBreak: useLineBreak.checked});

        // eslint-disable-next-line no-param-reassign
        output.innerHTML = markdownHtml;
        // eslint-disable-next-line no-param-reassign
        outputDebug.textContent = formatHtml(markdownHtml);
    }

    textArea.addEventListener('input', handleInput, false);
    useLineBreak.addEventListener('change', handleInput, false);
}
