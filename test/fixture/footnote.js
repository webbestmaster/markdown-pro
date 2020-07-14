// @flow

/* eslint-disable max-len */

export const fixtureFootnote = {
    input: `
### Footnote

[^first]: Footnote **can have markdown**
and
_multiple_
lines.

Footnote 1 link[^first].

Footnote 2 link[^second].

Footnote 1 link[^first] and 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^second]: Footnote text.
`,
    outputDoNotBreakLine:
        '<h3>Footnote</h3><p>Footnote 1 link<a href="#first"><sup>[1]</sup></a>.</p><p>Footnote 2 link<a href="#second"><sup>[2]</sup></a>.</p><p>Footnote 1 link<a href="#first"><sup>[1]</sup></a> and 2 link<a href="#second"><sup>[2]</sup></a>.</p><p>Inline footnote<a href="#text-of-inline-footnote"><sup>[3]</sup></a> definition.</p><p>Duplicated footnote reference<a href="#second"><sup>[2]</sup></a>.</p><hr/><ol type="1"><li id="first"><p>Footnote <b>can have markdown</b> and <i>multiple</i> lines.</p></li><li id="second"><p>Footnote text.</p></li><li id="text-of-inline-footnote"><p>Text of inline footnote</p></li></ol>',
    outputUseBreakLine:
        '<h3>Footnote</h3><p>Footnote 1 link<a href="#first"><sup>[1]</sup></a>.</p><p>Footnote 2 link<a href="#second"><sup>[2]</sup></a>.</p><p>Footnote 1 link<a href="#first"><sup>[1]</sup></a> and 2 link<a href="#second"><sup>[2]</sup></a>.</p><p>Inline footnote<a href="#text-of-inline-footnote"><sup>[3]</sup></a> definition.</p><p>Duplicated footnote reference<a href="#second"><sup>[2]</sup></a>.</p><hr/><ol type="1"><li id="first"><p>Footnote <b>can have markdown</b><br/>and<br/><i>multiple</i><br/>lines.</p></li><li id="second"><p>Footnote text.</p></li><li id="text-of-inline-footnote"><p>Text of inline footnote</p></li></ol>',
};
