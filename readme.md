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
    useLineBreak: true, // Convert '\n' into <br/>, default: false, optional
    wrapperClassName: 'my-markdown-pro', // add css class into wrapper, default: '', optional
    highlight: function (langNme, code) { // code highlight
        return yourHighlightFunction(langNme, code);
    }
};

const htmlCodeConfigured = markdownPro('# Markdown Pro', config);
```
