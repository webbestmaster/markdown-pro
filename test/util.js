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
    const minScrollDeltaHeight = 5;
    const fromScroll = getScrollPosition(fromNode);
    const toScroll = getScrollPosition(toNode);

    const newTopPosition = fromScroll.scrollTopGoal * (toScroll.scrollHeight - toScroll.clientHeight);

    if (Math.abs(newTopPosition - toScroll.scrollTop) < minScrollDeltaHeight) {
        return;
    }

    toNode.scrollTo(0, newTopPosition);
}
