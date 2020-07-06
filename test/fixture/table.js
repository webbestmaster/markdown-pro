// @flow

/* eslint-disable max-len */

export const fixtureTable1 = {
    input: `
Table with different cells align
| Left | Center  | Right  | Default (left) |
| :--- | :-----: | -----: | -------------- |
| [x] ! |   _123_   | xyz    | 1              |
| boop | http://site.com | tuv    | 2              |
| foo  |  10106  | qrstuv | 3              |
| bar  |    45   | lmno   | 4              |
Text under table
`,
    output:
        '<p>Table with different cells align</p><table><thead><tr><th align="left">Left</th><th align="center">Center</th><th align="right">Right</th><th align="left">Default (left)</th></tr></thead><tbody><tr><td align="left"><input type="checkbox" checked="checked" disabled="disabled"/> !</td><td align="center"><i>123</i></td><td align="right">xyz</td><td align="left">1</td></tr><tr><td align="left">boop</td><td align="center"><a href="http://site.com">http://site.com</a></td><td align="right">tuv</td><td align="left">2</td></tr><tr><td align="left">foo</td><td align="center">10106</td><td align="right">qrstuv</td><td align="left">3</td></tr><tr><td align="left">bar</td><td align="center">45</td><td align="right">lmno</td><td align="left">4</td></tr></tbody></table><p>Text under table</p>',
};
export const fixtureTable2 = {
    input: `
Table with different cells align
| [x] ! |   _123_   | xyz    | 1              |
| boop | http://site.com | tuv    | 2              |
| foo  |  10106  | qrstuv | 3              |
| bar  |    45   | lmno   | 4              |
Text under table
`,
    output:
        '<p>Table with different cells align</p><table><tbody><tr><td align="left"><input type="checkbox" checked="checked" disabled="disabled"/> !</td><td align="left"><i>123</i></td><td align="left">xyz</td><td align="left">1</td></tr><tr><td align="left">boop</td><td align="left"><a href="http://site.com">http://site.com</a></td><td align="left">tuv</td><td align="left">2</td></tr><tr><td align="left">foo</td><td align="left">10106</td><td align="left">qrstuv</td><td align="left">3</td></tr><tr><td align="left">bar</td><td align="left">45</td><td align="left">lmno</td><td align="left">4</td></tr></tbody></table><p>Text under table</p>',
};
export const fixtureTable3 = {
    input: `
Table with different cells align
| Left | Center  | Right  | Default (left) |
| :--- | :-----:
| [x] ! |   _123_   | xyz    | 1              |
| boop | http://site.com | tuv    | 2              |
| foo  |  10106  | qrstuv | 3              |
| bar  |    45   | lmno   | 4              |
Text under table
`,
    config: {
        parseLink: false,
    },
    output:
        '<p>Table with different cells align</p><table><thead><tr><th align="left">Left</th><th align="center">Center</th><th align="left">Right</th><th align="left">Default (left)</th></tr></thead><tbody><tr><td align="left"><input type="checkbox" checked="checked" disabled="disabled"/> !</td><td align="center"><i>123</i></td><td align="left">xyz</td><td align="left">1</td></tr><tr><td align="left">boop</td><td align="center">http://site.com</td><td align="left">tuv</td><td align="left">2</td></tr><tr><td align="left">foo</td><td align="center">10106</td><td align="left">qrstuv</td><td align="left">3</td></tr><tr><td align="left">bar</td><td align="center">45</td><td align="left">lmno</td><td align="left">4</td></tr></tbody></table><p>Text under table</p>',
};
