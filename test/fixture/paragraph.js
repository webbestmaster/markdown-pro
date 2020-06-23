// @flow

/* eslint-disable max-len */

export const fixtureParagraph = {
    input: `
    Usual text

    Usual text in
        several
        lines

Usual text with\
line breaker

Usual text with \
    one more \
line breaker\\
`,
    outputDoNotBreakLine:
        '<p>Usual text</p><p>Usual text in several lines</p><p>Usual text withline breaker</p><p>Usual text with one more line breaker</p>',
    outputUseBreakLine:
        '<p>Usual text</p><p>Usual text in<br/>several<br/>lines</p><p>Usual text withline breaker</p><p>Usual text with one more line breaker</p>',
};
