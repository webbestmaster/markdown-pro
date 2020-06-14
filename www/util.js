// @flow

// get from stackoverflow
// https://stackoverflow.com/questions/3913355/how-to-format-tidy-beautify-in-javascript
export function formatHtml(html: string): string {
    const tab: string = '\t';

    let result: string = '';

    let indent: string = '';

    html.split(/>\s*</).forEach((element: string) => {
        if (element.match(/^\/\w/)) {
            indent = indent.slice(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match(/^<?\w[^>]*[^/]$/)) {
            indent += tab;
        }
    });

    return result.slice(1, -3);
}
