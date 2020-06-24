// @flow

/* eslint-disable max-len */

export const fixtureOrderedList = {
    input: `
5. Create a Numeric list
1. by starting a line with
2. any number(s) with a dot, for example: \`1.\`

B. Create a Big Alphabet list
O. by starting a line with
P. any Big Letter(s) with a dot, for example: \`A.\`
Q. PS: avoid Roman number - I, V, X, L, C, D, M

f. The same rule
o. for Small Alphabet list
q. PS: avoid Roman number - i, v, x, l, c, d, m

I. Create a Big Roman Number list
II. by starting a line with
V. any Big Roman Number(s) with a dot, for example: \`I.\`

ii. The same rule
v. for Small Roman Number list`,
    outputDoNotBreakLine:
        '<ol type="1" start="5"><li>Create a Numeric list</li><li>by starting a line with</li><li>any number(s) with a dot, for example: <code data-type="inline">1.</code></li></ol><ol type="A" start="B"><li>Create a Big Alphabet list</li><li>by starting a line with</li><li>any Big Letter(s) with a dot, for example: <code data-type="inline">A.</code></li><li>PS: avoid Roman number - I, V, X, L, C, D, M</li></ol><ol type="a" start="f"><li>The same rule</li><li>for Small Alphabet list</li><li>PS: avoid Roman number - i, v, x, l, c, d, m</li></ol><ol type="I" start="I"><li>Create a Big Roman Number list</li><li>by starting a line with</li><li>any Big Roman Number(s) with a dot, for example: <code data-type="inline">I.</code></li></ol><ol type="i" start="ii"><li>The same rule</li><li>for Small Roman Number list</li></ol>',
    outputUseBreakLine:
        '<ol type="1" start="5"><li>Create a Numeric list</li><li>by starting a line with</li><li>any number(s) with a dot, for example: <code data-type="inline">1.</code></li></ol><ol type="A" start="B"><li>Create a Big Alphabet list</li><li>by starting a line with</li><li>any Big Letter(s) with a dot, for example: <code data-type="inline">A.</code></li><li>PS: avoid Roman number - I, V, X, L, C, D, M</li></ol><ol type="a" start="f"><li>The same rule</li><li>for Small Alphabet list</li><li>PS: avoid Roman number - i, v, x, l, c, d, m</li></ol><ol type="I" start="I"><li>Create a Big Roman Number list</li><li>by starting a line with</li><li>any Big Roman Number(s) with a dot, for example: <code data-type="inline">I.</code></li></ol><ol type="i" start="ii"><li>The same rule</li><li>for Small Roman Number list</li></ol>',
};
