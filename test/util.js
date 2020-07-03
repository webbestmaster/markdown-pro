// @flow

export function unwrap(html: string): string {
    const content = html
        // remove begin
        .replace(/^<div class="[\S\s]+?">/, '')
        // remove end
        .replace(/<\/div>$/, '');

    console.log('---> unwrap output:', content);

    return content;
}

export function stringReverse(someString: string): string {
    return someString.split('').reverse().join('');
}
