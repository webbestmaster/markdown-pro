// @flow

/* eslint-disable max-len */

export const fixtureCheckbox = {
    input: `
- [X] Checked checkbox
- [x] Checked checkbox too
- [ ] Unchecked checkbox

[x] And one more checkbox`,
    outputDoNotBreakLine:
        '<ul><li><input type="checkbox" checked="checked" disabled="disabled"/> Checked checkbox</li><li><input type="checkbox" checked="checked" disabled="disabled"/> Checked checkbox too</li><li><input type="checkbox" disabled="disabled"/> Unchecked checkbox</li></ul><p><input type="checkbox" checked="checked" disabled="disabled"/> And one more checkbox</p>',
    outputUseBreakLine:
        '<ul><li><input type="checkbox" checked="checked" disabled="disabled"/> Checked checkbox</li><li><input type="checkbox" checked="checked" disabled="disabled"/> Checked checkbox too</li><li><input type="checkbox" disabled="disabled"/> Unchecked checkbox</li></ul><p><input type="checkbox" checked="checked" disabled="disabled"/> And one more checkbox</p>',
};
