# markdown-pro

<!-- TODO: add live demo __[Live demo](https://markdown-it.github.io)__ -->

## Install

```bash
npm i markdown-pro
```

## Usage examples

```javascript
import markdownPro from 'markdown-pro';
// import styles
import style from 'markdown-pro/dist/style.css';

const htmlCodeA = markdownPro('# Markdown Pro'); // <h1>Markdown Pro</h1>

const config = {
    useLineBreak: true, // Convert '\n' into <br/>, default: false, optional
    wrapperClassName: 'my-markdown-pro', // add css class into wrapper, default: '', optional
}

const htmlCodeB = markdownPro('# Markdown Pro', config);
```
