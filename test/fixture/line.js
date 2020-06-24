// @flow

/* eslint-disable max-len */

export const fixtureLine = {
    input: `
-----
To make line
use \`---\`, \`***\` or \`___\`.
***
____
`,
    outputDoNotBreakLine:
        '<hr/><p>To make line use <code data-type="inline">---</code>, <code data-type="inline">***</code> or <code data-type="inline">___</code>.</p><hr/><hr/>',
    outputUseBreakLine:
        '<hr/><p>To make line<br/>use <code data-type="inline">---</code>, <code data-type="inline">***</code> or <code data-type="inline">___</code>.</p><hr/><hr/>',
};
