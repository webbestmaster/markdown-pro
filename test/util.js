// @flow

export function unwrap(html: string): string {
    return html.replace(/^<div class="[\S\s]+?">/, '').replace(/<\/div>$/, '');
}
