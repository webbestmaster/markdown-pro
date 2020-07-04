# Markdown-pro (6bk gzip)

[![Build Status](https://travis-ci.org/webbestmaster/markdown-pro.svg?branch=master)](https://travis-ci.org/github/webbestmaster/markdown-pro)
[![GitHub license](https://img.shields.io/npm/l/markdown-pro)](https://github.com/webbestmaster/markdown-pro/blob/master/license)
[![npm version](https://img.shields.io/npm/v/markdown-pro.svg?style=flat)](https://www.npmjs.com/package/markdown-pro)
[![Coverage Status](https://coveralls.io/repos/github/webbestmaster/markdown-pro/badge.svg?branch=master)](https://coveralls.io/github/webbestmaster/markdown-pro?branch=master)
[![Dependencies](https://david-dm.org/webbestmaster/markdown-pro.svg?)](https://david-dm.org/webbestmaster/markdown-pro)
[![Maintenance](https://img.shields.io/maintenance/yes/2020)](https://github.com/webbestmaster/markdown-pro/commits)
[![GitHub last commit](https://img.shields.io/github/last-commit/webbestmaster/markdown-pro)](https://github.com/webbestmaster/markdown-pro/commits)
[![npm](https://img.shields.io/npm/dm/markdown-pro)](https://www.npmjs.com/package/markdown-pro)
[![Website](https://img.shields.io/website?url=http%3A%2F%2Fwebbestmaster.github.io%2Fmarkdown-pro%2F)](http://webbestmaster.github.io/markdown-pro/)
[![Install size](https://packagephobia.now.sh/badge?p=markdown-pro)](https://packagephobia.now.sh/result?p=markdown-pro)


**[Live demo](http://webbestmaster.github.io/markdown-pro)**


## Install

```bash
npm i markdown-pro
```

## Usage examples

```javascript
import markdownPro from 'markdown-pro';
// import styles
import markdownProStyle from 'markdown-pro/dist/style.css';

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
    }
};

const htmlCodeConfigured = markdownPro('# Markdown Pro', config);
```


### Reference


#### Headers
```
# Header 1       ->  <h1>Header 1</h1>
## Header 2      ->  <h2>Header 2</h2>
### Header 3     ->  <h3>Header 3</h3>
#### Header 4    ->  <h4>Header 4</h4>
##### Header 5   ->  <h5>Header 5</h5>
###### Header 6  ->  <h6>Header 6</h6>
```


#### Paragraph

```
some text -> <p>some text</p>
```


#### Emphasis

```
**This is bold text**               ->  <b>This is bold text</b>
__This is underline text__          ->  <u>This is underline text</u>
_This is italic text_               ->  <i>This is italic text</i>
*This is italic text __too__*       ->  <i>This is italic text <u>too</u></i>
***This is bold and italic text***  ->  <b><i>This is bold and italic text</i></b>
~~This is strikethrough text~~      ->  <strike>This is strikethrough text</strike>
```


#### Lines

```
---  ->  <hr/>
***  ->  <hr/>
___  ->  <hr/>
```


#### Subscript/Superscript

```
25^th^      ->  25<sup>th</sup>
C~2~H~5~OH  ->  C<sub>2</sub>H<sub>5</sub>OH
```


#### Images

```
![](https://placekitten.com/100/100)               ->  <img src="https://placekitten.com/100/100"/>
![Cat](https://placekitten.com/110/110)            ->  <img src="https://placekitten.com/110/110" alt="Cat"/>
![Cat](https://placekitten.com/120/120 "The cat")  ->  <img src="https://placekitten.com/120/120" alt="Cat" title="The cat"/>
Image ![](https://placekitten.com/100/25) inline   ->  Image <img src="https://placekitten.com/100/25"/> inline
```


#### Checkboxes

```
[X] checked    ->  <input type="checkbox" checked="checked" disabled="disabled"/> checked
[x] checked    ->  <input type="checkbox" checked="checked" disabled="disabled"/> checked
[ ] unchecked  ->  <input type="checkbox" disabled="disabled"/> unchecked
```


#### Links

```
[the site](http://example.com)  ->  <a href="http://example.com">the site</a>
[](http://example.com)          ->  <a href="http://example.com">http://example.com</a>

// parse link, configurable
http://example.com              ->  <a href="http://example.com">http://example.com</a>
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
```
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
```
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


#### Blockquote

```
> Markdown-pro  ->  <blockquote>Markdown-pro</blockquote>
```


#### Code

```
&#x60;&#x60;&#x60;bash  ->  <code data-lang="bash">
$ npm i markdown-pro    ->  $ npm i markdown-pro
$ sudo be happy         ->  $ sudo be happy
&#x60;&#x60;&#x60;      ->  </code>
```
