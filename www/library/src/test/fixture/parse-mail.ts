/* eslint-disable max-len */

export const fixtureParseMail = {
    input: `
var my-email@example.com - simple email my-email@example.com.
var <a>my-email@example.com</a>
var <a href="mailto:my-email@example.com">my-email@example.com</a>
var <a href="mailto:my-email@example.com">text with my-email@example.com email</a>
var <a href="mailto:my-email@example.com">my-email@example.com link</a>
var <a href="mailto:my-email@example.com">text with my-email@example.com</a>
var <a href="mailto:my-email@example.com">text with my-email@example.com</a>my-email@example.com
`,
    outputDoNotBreakLine:
        '<p>var <a href="mailto:my-email@example.com">my-email@example.com</a> - simple email <a href="mailto:my-email@example.com">my-email@example.com</a>. var <a>my-email@example.com</a> var <a href="mailto:my-email@example.com">my-email@example.com</a> var <a href="mailto:my-email@example.com">text with my-email@example.com email</a> var <a href="mailto:my-email@example.com">my-email@example.com link</a> var <a href="mailto:my-email@example.com">text with my-email@example.com</a> var <a href="mailto:my-email@example.com">text with my-email@example.com</a><a href="mailto:my-email@example.com">my-email@example.com</a></p>',
    outputUseBreakLine:
        '<p>var <a href="mailto:my-email@example.com">my-email@example.com</a> - simple email <a href="mailto:my-email@example.com">my-email@example.com</a>.<br/>var <a>my-email@example.com</a><br/>var <a href="mailto:my-email@example.com">my-email@example.com</a><br/>var <a href="mailto:my-email@example.com">text with my-email@example.com email</a><br/>var <a href="mailto:my-email@example.com">my-email@example.com link</a><br/>var <a href="mailto:my-email@example.com">text with my-email@example.com</a><br/>var <a href="mailto:my-email@example.com">text with my-email@example.com</a><a href="mailto:my-email@example.com">my-email@example.com</a></p>',
};

export const fixtureDoNotParseMail = {
    input: `
var my-email@example.com - simple email my-email@example.com.
var <a>my-email@example.com</a>
var <a href="mailto:my-email@example.com">my-email@example.com</a>
var <a href="mailto:my-email@example.com">text with my-email@example.com email</a>
var <a href="mailto:my-email@example.com">my-email@example.com link</a>
var <a href="mailto:my-email@example.com">text with my-email@example.com</a>
var <a href="mailto:my-email@example.com">text with my-email@example.com</a>my-email@example.com
`,
    outputDoNotBreakLine:
        '<p>var my-email@example.com - simple email my-email@example.com. var <a>my-email@example.com</a> var <a href="mailto:my-email@example.com">my-email@example.com</a> var <a href="mailto:my-email@example.com">text with my-email@example.com email</a> var <a href="mailto:my-email@example.com">my-email@example.com link</a> var <a href="mailto:my-email@example.com">text with my-email@example.com</a> var <a href="mailto:my-email@example.com">text with my-email@example.com</a>my-email@example.com</p>',
    outputUseBreakLine:
        '<p>var my-email@example.com - simple email my-email@example.com.<br/>var <a>my-email@example.com</a><br/>var <a href="mailto:my-email@example.com">my-email@example.com</a><br/>var <a href="mailto:my-email@example.com">text with my-email@example.com email</a><br/>var <a href="mailto:my-email@example.com">my-email@example.com link</a><br/>var <a href="mailto:my-email@example.com">text with my-email@example.com</a><br/>var <a href="mailto:my-email@example.com">text with my-email@example.com</a>my-email@example.com</p>',
};
