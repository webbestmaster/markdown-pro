// @flow

/* global document, Event, HTMLTextAreaElement, HTMLDivElement, HTMLPreElement */

import {init} from './init';

const defaultMarkdown = `
    time to mark down
        I ma here

### unordered list

+ Create a list by starting a line with
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
        ### inner header
    * Facilisis in pretium nisl aliquet
addtional line 1
    addtional line 2
        addtional line 3
    * Nulla volutpat aliquam velit


+ Very easy!



### unordered list 2

+ Create a list by starting a line with 2
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at


    + Facilisis in pretium nisl aliquet



    - Nulla volutpat aliquam velit
+ Very easy!

### ordered list 3

1. Create a list by starting a line with 2
1. Sub-lists are made by indenting 2 spaces:
  1. Marker character change forces new list start:
    1. Ac tristique libero volutpat at


    + Facilisis in pretium nisl aliquet



    1. Nulla volutpat aliquam velit
+ Very easy!
`;

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const outputDebug = document.querySelector('.js-output-debug');

if (input instanceof HTMLTextAreaElement && output instanceof HTMLDivElement && outputDebug instanceof HTMLPreElement) {
    input.textContent = defaultMarkdown;

    init(input, output, outputDebug);

    input.dispatchEvent(new Event('input'));
}
