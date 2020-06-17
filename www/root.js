// @flow

/* global document, Event, HTMLTextAreaElement, HTMLDivElement, HTMLPreElement */

import {init} from './init';
import defaultMarkdown from './index.md';

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const outputDebug = document.querySelector('.js-output-debug');

if (input instanceof HTMLTextAreaElement && output instanceof HTMLDivElement && outputDebug instanceof HTMLPreElement) {
    input.textContent = defaultMarkdown;

    init(input, output, outputDebug);

    input.dispatchEvent(new Event('input'));
}
