// @flow

export function unwrap(html: string): string {
    const content = html
        // remove begin
        .replace(/^<div class="[\S\s]+?">/, '')
        // remove end
        .replace(/<\/div>$/, '');

    console.log('\n---> input:', html);
    console.log('---> output:', content);

    return content;
}
