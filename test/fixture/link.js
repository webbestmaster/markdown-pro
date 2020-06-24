// @flow

/* eslint-disable max-len */

export const fixtureLink = {
    input: `
    ### Links

You can use like this [link](http://example.com) or like this [](http://example.com).`,
    outputDoNotBreakLine:
        '<h3>Links</h3><p>You can use like this <a href="http://example.com">link</a> or like this <a href="http://example.com">http://example.com</a>.</p>',
    outputUseBreakLine:
        '<h3>Links</h3><p>You can use like this <a href="http://example.com">link</a> or like this <a href="http://example.com">http://example.com</a>.</p>',
};
