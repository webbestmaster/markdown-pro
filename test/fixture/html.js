// @flow

/* eslint-disable max-len */

export const fixtureHtml = {
    input: `
    <p>Use any html tags</p>

    here some text too

<span>Multi Line
will be wrapped
into tag P</span>`,
    outputDoNotBreakLine:
        '<p>Use any html tags</p><p>here some text too</p><p><span>Multi Line will be wrapped into tag P</span></p>',
    outputUseBreakLine:
        '<p>Use any html tags</p><p>here some text too</p><p><span>Multi Line<br/>will be wrapped<br/>into tag P</span></p>',
};
