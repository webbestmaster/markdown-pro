# Markdown Pro

[![Build Status](https://travis-ci.org/webbestmaster/markdown-pro.svg?branch=master)](https://travis-ci.org/github/webbestmaster/markdown-pro)
[![GitHub license](https://img.shields.io/npm/l/markdown-pro)](https://github.com/webbestmaster/markdown-pro/blob/master/license)
[![npm version](https://img.shields.io/npm/v/markdown-pro.svg?style=flat)](https://www.npmjs.com/package/markdown-pro)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/markdown-pro)
[![Coverage Status](https://coveralls.io/repos/github/webbestmaster/markdown-pro/badge.svg?branch=master)](https://coveralls.io/github/webbestmaster/markdown-pro?branch=master)
[![GitHub stars](https://img.shields.io/github/stars/webbestmaster/markdown-pro?style=social&maxAge=2592000)](https://github.com/webbestmaster/markdown-pro/)

<!--

[![Maintenance](https://img.shields.io/maintenance/yes/2020)](https://github.com/webbestmaster/markdown-pro/commits)
[![Dependencies](https://david-dm.org/webbestmaster/markdown-pro.svg?)](https://david-dm.org/webbestmaster/markdown-pro)
[![GitHub last commit](https://img.shields.io/github/last-commit/webbestmaster/markdown-pro)](https://github.com/webbestmaster/markdown-pro/commits)
![npm](https://img.shields.io/npm/dt/markdown-pro.svg)
[![npm](https://img.shields.io/npm/dm/markdown-pro)](https://www.npmjs.com/package/markdown-pro)
[![Website](https://img.shields.io/website?url=http%3A%2F%2Fwebbestmaster.github.io%2Fmarkdown-pro%2F)](http://webbestmaster.github.io/markdown-pro/)
[![Install size](https://packagephobia.now.sh/badge?p=markdown-pro)](https://packagephobia.now.sh/result?p=markdown-pro)

-->

**[Live demo](http://webbestmaster.github.io/markdown-pro)**


## Install

```bash
npm i markdown-pro
```

## Usage examples

```javascript
import markdownPro from 'markdown-pro';
// import styles
import 'markdown-pro/dist/style.css';

const htmlCode = markdownPro('# Markdown Pro'); // <h1>Markdown Pro</h1>

const config = {
    // convert '\n' into <br/>, default: false, optional
    useLineBreak: true,
    // add css class into wrapper, default: '', optional
    wrapperClassName: 'my-markdown-pro',
    // https://exmaple.com -> <a href="https://exmaple.com">https://exmaple.com</a>, default: true, optional
    parseLink: true,
    // langNme: string, code: string, optional
    codeHighlight: function (langNme, code) {
        return yourHighlightFunction(langNme, code);
    },
    // use wrapper <div class="md-pro">...</div>, default: true, optional
    useWrapper: true,
};

const htmlCodeConfigured = markdownPro('# Markdown Pro', config);
```


### Typing Flow

Use `./flow-typed/markdown-pro.js`.


### Typing TypeScript

Use `./@types/index.d.ts`.



### Reference


#### Headers
```html
# Header 1       ->  <h1>Header 1</h1>
## Header 2      ->  <h2>Header 2</h2>
### Header 3     ->  <h3>Header 3</h3>
#### Header 4    ->  <h4>Header 4</h4>
##### Header 5   ->  <h5>Header 5</h5>
###### Header 6  ->  <h6>Header 6</h6>
```


#### Paragraph

```html
some text -> <p>some text</p>
```


#### Emphasis

```html
**This is bold text**               ->  <b>This is bold text</b>
__This is underline text__          ->  <u>This is underline text</u>
_This is italic text_               ->  <i>This is italic text</i>
*This is italic text __too__*       ->  <i>This is italic text <u>too</u></i>
***This is bold and italic text***  ->  <b><i>This is bold and italic text</i></b>
~~This is strikethrough text~~      ->  <strike>This is strikethrough text</strike>
```


#### Lines

```html
---  ->  <hr/>
***  ->  <hr/>
___  ->  <hr/>
```


#### Subscript/Superscript

```html
25^th^      ->  25<sup>th</sup>
C~2~H~5~OH  ->  C<sub>2</sub>H<sub>5</sub>OH
```


#### Images

```html
![](https://placekitten.com/100/100)               ->  <img src="https://placekitten.com/100/100"/>
![Cat](https://placekitten.com/110/110)            ->  <img src="https://placekitten.com/110/110" alt="Cat"/>
![Cat](https://placekitten.com/120/120 "The cat")  ->  <img src="https://placekitten.com/120/120" alt="Cat" title="The cat"/>
Image ![](https://placekitten.com/100/25) inline   ->  Image <img src="https://placekitten.com/100/25"/> inline
```


#### Checkboxes

```html
// big "X" to check checkbox
[X] checked    ->  <input type="checkbox" checked="checked" disabled="disabled"/> checked

// small "x" to check checkbox
[x] checked    ->  <input type="checkbox" checked="checked" disabled="disabled"/> checked

// single space (" ") to uncheck checkbox
[ ] unchecked  ->  <input type="checkbox" disabled="disabled"/> unchecked
```


#### Links

```html
[the site](http://example.com)               ->  <a href="http://example.com">the site</a>
[](http://example.com)                       ->  <a href="http://example.com">http://example.com</a>
[](http://example.com "go to site")          ->  <a href="http://example.com" title="go to site">http://example.com</a>
[the site](http://example.com "go to site")  ->  <a href="http://example.com" title="go to site">the site</a>

// parse link, configurable
http://example.com                           ->  <a href="http://example.com">http://example.com</a>
```


#### Emails

```html
[send a email](my-email@example.com)                                    ->  <a href="mailto:my-email@example.com">send a email</a>
[](my-email@example.com "send a email")                                 ->  <a href="mailto:my-email@example.com" title="send a email">my-email@example.com</a>
[send a email](my-email@example.com "send a email")                     ->  <a href="mailto:my-email@example.com" title="send a email">send a email</a>
[email and subject](my-email@example.com "Link title" "Email subject")  ->  <a href="mailto:my-email@example.com?subject=Email subject" title="Link title">email and subject</a>
[](my-email@example.com)                                                ->  <a href="mailto:my-email@example.com">my-email@example.com</a>

// parse email, configurable
my-email@example.com                                                    ->  <a href="mailto:my-email@example.com">my-email@example.com</a>
```


#### Unordered list

Markdown:
```
+ Create an unordered list by starting a line with `+`, `-` or `*`
+ Sub-lists are made by indenting space(s):
    + Lorem ipsum dolor
    + Alias animi autem beatae
```

Html:
```html
<ul>
    <li>Create an unordered list by starting a line with <code data-type="inline">+</code>, <code data-type="inline">-</code> or <code data-type="inline">*</code></li>
    <li>Sub-lists are made by indenting space(s):
        <ul>
            <li>Lorem ipsum dolor</li>
            <li>Alias animi autem beatae</li>
        </ul>
    </li>
</ul>
```


### Ordered lists

Markdown:
```
5. Create a Numeric list
1. by starting a line with
2. any number(s) with a dot, for example: `1.`

B. Create a Big Alphabet list
O. by starting a line with
P. any Big Letter(s) with a dot, for example: `A.`
Q. PS: avoid Roman number - I, V, X, L, C, D, M

f. The same rule
o. for Small Alphabet list
q. PS: avoid Roman number - i, v, x, l, c, d, m

I. Create a Big Roman Number list
II. by starting a line with
V. any Big Roman Number(s) with a dot, for example: `I.`

ii. The same rule
v. for Small Roman Number list
```

Html:
```html
<ol type="1" start="5">
    <li>Create a Numeric list</li>
    <li>by starting a line with</li>
    <li>any number(s) with a dot, for example: <code data-type="inline">1.</code></li>
</ol>

<ol type="A" start="B">
    <li>Create a Big Alphabet list</li>
    <li>by starting a line with</li>
    <li>any Big Letter(s) with a dot, for example: <code data-type="inline">A.</code></li>
    <li>PS: avoid Roman number - I, V, X, L, C, D, M</li>
</ol>

<ol type="a" start="f">
    <li>The same rule</li>
    <li>for Small Alphabet list</li>
    <li>PS: avoid Roman number - i, v, x, l, c, d, m</li>
</ol>

<ol type="I" start="I">
    <li>Create a Big Roman Number list</li>
    <li>by starting a line with</li>
    <li>any Big Roman Number(s) with a dot, for example: <code data-type="inline">I.</code></li>
</ol>

<ol type="i" start="ii">
    <li>The same rule</li>
    <li>for Small Roman Number list</li>
</ol>
```


### Table

Markdown:
```
| Left | Center | Right  |
| :--- | :----: | -----: |
| beep | 123    | abc    |
| boop | 456    | def    |
```

Html:
```html
<table>
    <thead>
        <tr>
            <th align="left">Left</th>
            <th align="center">Center</th>
            <th align="right">Right</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">beep</td>
            <td align="center">123</td>
            <td align="right">abc</td>
        </tr>
        <tr>
            <td align="left">boop</td>
            <td align="center">456</td>
            <td align="right">def</td>
        </tr>
    </tbody>
</table>
```


### Footnote

Markdown:
```
Footnote 1 link[^first].

Inline footnote^[Text of inline footnote] definition.

[^first]: Footnote definition.
```

Html:
```html
<p>Footnote 1 link<a href="#first"><sup>[1]</sup></a>.</p>

<p>Inline footnote<a href="#text-of-inline-footnote"><sup>[2]</sup></a> definition.</p>

<hr/>

<ol type="1">
    <li id="first">
        <p>Footnote definition.</p>
    </li>
    <li id="text-of-inline-footnote">
        <p>Text of inline footnote</p>
    </li>
</ol>
```


#### Blockquote

```html
> Markdown-pro  ->  <blockquote>Markdown-pro</blockquote>
```


#### Code

<pre><code>```bash                 ->  &lt;code data-lang="bash"&gt;
$ npm i markdown-pro    ->  $ npm i markdown-pro
$ sudo be happy         ->  $ sudo be happy
```                     ->  &lt;&#47;code&gt;</code></pre>


### Variables

```html
[image-variable]: https://placekitten.com/100/100
[url variable]: http://example.com
[email variable]: email@example.com

![][image-variable]           ->  <img loading="lazy" src="https://placekitten.com/100/100"/>
![cat][image-variable]        ->  <img loading="lazy" src="https://placekitten.com/100/100" alt="cat"/>

[][url variable]              ->  <a href="http://example.com">http://example.com</a>
[to site][url variable]       ->  <a href="http://example.com">to site</a>
[send email][email variable]  ->  <a href="mailto:email@example.com">send email</a>
```
