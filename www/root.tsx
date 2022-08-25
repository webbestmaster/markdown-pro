/* global document, Event, HTMLTextAreaElement, HTMLDivElement, HTMLPreElement, HTMLInputElement, HTMLSelectElement */

import {init} from './demo/init';
import defaultMarkdown from './demo/demo.md';

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const outputDebug = document.querySelector('.js-output-debug');
const useLineBreak = document.querySelector('.js-use-line-break');
const parseLink = document.querySelector('.js-parse-link');
const themeName = document.querySelector('.js-theme-name');

if (
    input instanceof HTMLTextAreaElement &&
    output instanceof HTMLDivElement &&
    outputDebug instanceof HTMLPreElement &&
    useLineBreak instanceof HTMLInputElement &&
    parseLink instanceof HTMLInputElement &&
    themeName instanceof HTMLSelectElement
) {
    input.textContent = defaultMarkdown;

    init(input, output, outputDebug, useLineBreak, parseLink, themeName);
    input.dispatchEvent(new Event('input'));
}
