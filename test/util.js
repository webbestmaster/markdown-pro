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

type ScrollPositionType = {
    scrollTop: number,
    scrollHeight: number,
    clientHeight: number,
    scrollTopGoal: number,
};

function getScrollPosition(node: HTMLElement): ScrollPositionType {
    const {scrollTop, scrollHeight, clientHeight} = node;
    const maxScrollTop = scrollHeight - clientHeight;
    const scrollTopGoal = scrollTop / maxScrollTop;

    return {
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollTopGoal,
    };
}

export function syncScroll(fromNode: HTMLElement, toNode: HTMLElement) {
    const fromScroll = getScrollPosition(fromNode);
    const toScroll = getScrollPosition(toNode);

    // eslint-disable-next-line no-param-reassign
    toNode.scrollTop = fromScroll.scrollTopGoal * (toScroll.scrollHeight - toScroll.clientHeight);
}
