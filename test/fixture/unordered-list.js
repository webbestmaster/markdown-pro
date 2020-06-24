// @flow

/* eslint-disable max-len */

export const fixtureUnorderedList = {
    input: `
+ Create a unordered list by starting a line with \`+\`, \`-\` or \`*\`
+ Sub-lists are made by indenting space(s):
    + Lorem ipsum dolor
    + Alias animi autem beatae`,
    outputDoNotBreakLine:
        '<ul><li>Create a unordered list by starting a line with <code data-type="inline">+</code>, <code data-type="inline">-</code> or <code data-type="inline">*</code></li><li>Sub-lists are made by indenting space(s):<ul><li>Lorem ipsum dolor</li><li>Alias animi autem beatae</li></ul></li></ul>',
    outputUseBreakLine:
        '<ul><li>Create a unordered list by starting a line with <code data-type="inline">+</code>, <code data-type="inline">-</code> or <code data-type="inline">*</code></li><li>Sub-lists are made by indenting space(s):<ul><li>Lorem ipsum dolor</li><li>Alias animi autem beatae</li></ul></li></ul>',
};
