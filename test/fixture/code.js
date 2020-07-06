// @flow

/* eslint-disable max-len */

const fixtureCodeLangName = 'bash';
const fixtureCodeTextCode = '$ npm i markdown-pro\n$ sudo be happy';

export const fixtureCode = {
    input: `
    ### I ❤️ Coding:

\`\`\`${fixtureCodeLangName}
${fixtureCodeTextCode}
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

\`\`\`${fixtureCodeLangName}
${fixtureCodeTextCode}
\`\`\`

And simple text after.
`,
    langName: fixtureCodeLangName,
    code: fixtureCodeTextCode,
    outputDoNotBreakLine:
        '<h3>I ❤️ Coding Highlight:</h3><code data-lang="bash">yppah eb odus $\norp-nwodkram i mpn $</code><p>And simple text after.</p>',
    outputUseBreakLine:
        '<h3>I ❤️ Coding Highlight:</h3><code data-lang="bash">yppah eb odus $\norp-nwodkram i mpn $</code><p>And simple text after.</p>',
};

export const fixtureCodeHighlightNoLang = {
    input: `
    ### I ❤️ Coding Highlight:

\`\`\`
${fixtureCodeTextCode}
\`\`\`

And simple text after.
`,
    langName: '',
    code: fixtureCodeTextCode,
    outputDoNotBreakLine:
        '<h3>I ❤️ Coding Highlight:</h3><code>yppah eb odus $\norp-nwodkram i mpn $</code><p>And simple text after.</p>',
    outputUseBreakLine:
        '<h3>I ❤️ Coding Highlight:</h3><code>yppah eb odus $\norp-nwodkram i mpn $</code><p>And simple text after.</p>',
};
