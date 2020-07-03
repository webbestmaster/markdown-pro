// @flow

/* eslint-disable max-len */

import {stringReverse} from '../util';

export const fixtureCode = {
    input: `
    ### I ❤️ Coding:

\`\`\`bash
$ npm i markdown-pro
$ sudo be happy
\`\`\`

And simple text after.
`,
    outputDoNotBreakLine:
        '<h3>I ❤️ Coding:</h3><code data-lang="bash">$ npm i markdown-pro\n$ sudo be happy</code><p>And simple text after.</p>',
    outputUseBreakLine:
        '<h3>I ❤️ Coding:</h3><code data-lang="bash">$ npm i markdown-pro\n$ sudo be happy</code><p>And simple text after.</p>',
};

export const fixtureCodeHighlight = {
    input: `
    ### I ❤️ Coding Highlight:

\`\`\`bash
$ npm i markdown-pro
$ sudo be happy
\`\`\`

And simple text after.
`,
    codeHighlight: (langName: string, code: string): string => stringReverse(code),
    outputDoNotBreakLine:
        '<h3>I ❤️ Coding Highlight:</h3><code data-lang="bash">yppah eb odus $\n'
        + 'orp-nwodkram i mpn $</code><p>And simple text after.</p>',
    outputUseBreakLine:
        '<h3>I ❤️ Coding Highlight:</h3><code data-lang="bash">yppah eb odus $\n'
        + 'orp-nwodkram i mpn $</code><p>And simple text after.</p>',
};
