// @flow

/* eslint-disable max-len */

export const fixtureCode = {
    input: `
    ### I ❤️ Coding:

\`\`\`bash
$ npm i markdown-pro
$ sudo be happy
\`\`\`

And simple text after.
`,
    outputDoNotBreakLine: '<h3>I ❤️ Coding:</h3><code data-lang="bash">$ npm i markdown-pro\n$ sudo be happy</code><p>And simple text after.</p>',
    outputUseBreakLine: '<h3>I ❤️ Coding:</h3><code data-lang="bash">$ npm i markdown-pro\n$ sudo be happy</code><p>And simple text after.</p>',
};
