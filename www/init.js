// @flow

/* global window */

// import markdownPro from 'markdown-pro';
// import markdownProStyle from 'markdown-pro/dist/style.css';
import markdownPro, {markdown} from '../src/markdown';

import {syncScroll, updateScrollPositionCache} from '../test/util';

import {formatHtml} from './util';

export function init(
    textArea: HTMLTextAreaElement,
    output: HTMLDivElement,
    outputDebug: HTMLPreElement,
    useLineBreak: HTMLInputElement
) {
    function refreshResult() {
        updateScrollPositionCache([textArea, output]);
        syncScroll(textArea, output);
    }

    function handleInput() {
        const inputValue = textArea.value;

        const markdownHtml = markdownPro(inputValue, {useLineBreak: useLineBreak.checked});

        // eslint-disable-next-line no-param-reassign
        output.innerHTML = markdownHtml;
        // eslint-disable-next-line no-param-reassign
        outputDebug.textContent = formatHtml(markdownHtml);
        refreshResult();
    }

    function handleScroll(evt: Event) {
        // $FlowFixMe
        const element: HTMLElement = evt.currentTarget;

        if (element === textArea) {
            syncScroll(textArea, output);
        } else {
            syncScroll(output, textArea);
        }
    }

    textArea.addEventListener('input', handleInput, false);

    textArea.addEventListener('scroll', handleScroll, {passive: true});
    output.addEventListener('scroll', handleScroll, {passive: true});

    useLineBreak.addEventListener('change', handleInput, false);

    window.addEventListener('resize', refreshResult, false);
}
