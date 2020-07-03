// @flow

/* eslint-disable max-len */

export const fixtureParseLink = {
    input: `
var https://example.com - simple link https://example.com.
var <a>https://example.com</a>
var <a href="https://example.com">https://example.com</a>
var <a href="https://example.com">text with https://example.com link</a>
var <a href="https://example.com">https://example.com link</a>
var <a href="https://example.com">text with https://example.com</a>
var <a href="https://example.com">text with https://example.com</a>https://example.com
`,
    outputDoNotBreakLine:
        '<p>var <a href="https://example.com">https://example.com</a> - simple link <a href="https://example.com">https://example.com</a>. var <a>https://example.com</a> var <a href="https://example.com">https://example.com</a> var <a href="https://example.com">text with https://example.com link</a> var <a href="https://example.com">https://example.com link</a> var <a href="https://example.com">text with https://example.com</a> var <a href="https://example.com">text with https://example.com</a><a href="https://example.com">https://example.com</a></p>',
    outputUseBreakLine:
        '<p>var <a href="https://example.com">https://example.com</a> - simple link <a href="https://example.com">https://example.com</a>.<br/>var <a>https://example.com</a><br/>var <a href="https://example.com">https://example.com</a><br/>var <a href="https://example.com">text with https://example.com link</a><br/>var <a href="https://example.com">https://example.com link</a><br/>var <a href="https://example.com">text with https://example.com</a><br/>var <a href="https://example.com">text with https://example.com</a><a href="https://example.com">https://example.com</a></p>',
};

export const fixtureDoNotParseLink = {
    input: `
var https://example.com - simple link https://example.com.
var <a>https://example.com</a>
var <a href="https://example.com">https://example.com</a>
var <a href="https://example.com">text with https://example.com link</a>
var <a href="https://example.com">https://example.com link</a>
var <a href="https://example.com">text with https://example.com</a>
var <a href="https://example.com">text with https://example.com</a>https://example.com
`,
    outputDoNotBreakLine:
        '<p>var https://example.com - simple link https://example.com. var <a>https://example.com</a> var <a href="https://example.com">https://example.com</a> var <a href="https://example.com">text with https://example.com link</a> var <a href="https://example.com">https://example.com link</a> var <a href="https://example.com">text with https://example.com</a> var <a href="https://example.com">text with https://example.com</a>https://example.com</p>',
    outputUseBreakLine:
        '<p>var https://example.com - simple link https://example.com.<br/>var <a>https://example.com</a><br/>var <a href="https://example.com">https://example.com</a><br/>var <a href="https://example.com">text with https://example.com link</a><br/>var <a href="https://example.com">https://example.com link</a><br/>var <a href="https://example.com">text with https://example.com</a><br/>var <a href="https://example.com">text with https://example.com</a>https://example.com</p>',
};
