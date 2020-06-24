# Markdown-pro

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
}

const htmlCodeConfigured = markdownPro('# Markdown Pro', config);
```
