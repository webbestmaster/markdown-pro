// @flow

/* eslint-disable max-len */

export const fixtureBlockquote = {
    input: `
    ### My favorite blockquote:

> One Markdown,
One Specification,
One Blockquote

And simple text.
`,
    outputDoNotBreakLine:
        '<h3>My favorite blockquote:</h3><blockquote>One Markdown, One Specification, One Blockquote</blockquote><p>And simple text.</p>',
    outputUseBreakLine:
        '<h3>My favorite blockquote:</h3><blockquote>One Markdown,<br/>One Specification,<br/>One Blockquote</blockquote><p>And simple text.</p>',
};
