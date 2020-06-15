// @flow

/* global document, Event, HTMLTextAreaElement, HTMLDivElement, HTMLPreElement */

import {init} from './init';

const defaultMarkdown = `
## Support headers h1-h6

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Alias animi autem beatae, ex fuga harum in laborum libero nam tempore!
Autem et iure nobis non nostrum quaerat quisquam sunt totam!

### Unordered list
+ Create a unordered list by starting a line with \`+ \`, \`- \` or \`* \`
+ Sub-lists are made by indenting space(s):
    + Lorem ipsum dolor
    + Alias animi autem beatae

### Ordered list
5. Create a Numeric list
1. by starting a line with
2. any number(s) with dot, for example: \`1. \`

A. Create a Big Alphabet list
O. by starting a line with
P. any Big Letter(s) with dot, for example: \`A. \`
Q. PS: avoid Roman number - I, V, X, L, C, D, M

a. The same rule
o. for Small Alphabet list
q. PS: avoid Roman number - i, v, x, l, c, d, m

I. Create a Big Roman Number list
II. by starting a line with
V. any Big Roman Number(s) with dot, for example: \`I. \`

i. The same rule
v. for Small Roman Number list

### My favorite blockquote

> One Markdown, One Specification, One Blockquote

`;

const input = document.querySelector('.js-input');
const output = document.querySelector('.js-output');
const outputDebug = document.querySelector('.js-output-debug');

if (input instanceof HTMLTextAreaElement && output instanceof HTMLDivElement && outputDebug instanceof HTMLPreElement) {
    input.textContent = defaultMarkdown;

    init(input, output, outputDebug);

    input.dispatchEvent(new Event('input'));
}
