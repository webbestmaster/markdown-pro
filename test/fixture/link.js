// @flow

/* eslint-disable max-len */

export const fixtureLink = {
    input: `
You can use like this [link](http://example.com)
or [](http://example.com)
or http://example.com
or http://example.com/
or http://example.com/path/to/page
or http://example.com/path/to/page/
or (http://example.com/path/to/page)
or (http://example.com/path/to/page/)
or [](http://example.com "go to site")
or [go to site](http://example.com "go to site again")
`,
    outputDoNotBreakLine:
        '<p>You can use like this <a href="http://example.com">link</a> or <a href="http://example.com">http://example.com</a> or <a href="http://example.com">http://example.com</a> or <a href="http://example.com/">http://example.com/</a> or <a href="http://example.com/path/to/page">http://example.com/path/to/page</a> or <a href="http://example.com/path/to/page/">http://example.com/path/to/page/</a> or (<a href="http://example.com/path/to/page">http://example.com/path/to/page</a>) or (<a href="http://example.com/path/to/page/">http://example.com/path/to/page/</a>) or <a href="http://example.com" title="go to site">http://example.com</a> or <a href="http://example.com" title="go to site again">go to site</a></p>',
    outputUseBreakLine:
        '<p>You can use like this <a href="http://example.com">link</a><br/>or <a href="http://example.com">http://example.com</a><br/>or <a href="http://example.com">http://example.com</a><br/>or <a href="http://example.com/">http://example.com/</a><br/>or <a href="http://example.com/path/to/page">http://example.com/path/to/page</a><br/>or <a href="http://example.com/path/to/page/">http://example.com/path/to/page/</a><br/>or (<a href="http://example.com/path/to/page">http://example.com/path/to/page</a>)<br/>or (<a href="http://example.com/path/to/page/">http://example.com/path/to/page/</a>)<br/>or <a href="http://example.com" title="go to site">http://example.com</a><br/>or <a href="http://example.com" title="go to site again">go to site</a></p>',
};
