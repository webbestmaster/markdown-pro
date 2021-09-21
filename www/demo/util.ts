/* global NodeJS, setTimeout, clearTimeout, HTMLElement */

// get from stackoverflow
// https://stackoverflow.com/questions/3913355/how-to-format-tidy-beautify-in-javascript
export function formatHtml(html: string): string {
    const tab = '\t';

    let result = '';

    let indent = '';

    html.split(/>\s*</).forEach((element: string) => {
        if (/^\/\w/.test(element)) {
            indent = indent.slice(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (/^<?\w[^>]*[^/]$/.test(element)) {
            indent += tab;
        }
    });

    return result.slice(1, -3);
}

type ScrollPositionType = Readonly<{
    clientHeight: number;
    maxScrollTop: number;
    node: HTMLElement;
    scrollHeight: number;
}>;

const scrollPositionCacheList: Array<ScrollPositionType> = [];

function getScrollPosition(node: HTMLElement): ScrollPositionType {
    const cachedData = scrollPositionCacheList.find((cachedScrollPosition: ScrollPositionType): boolean => {
        return cachedScrollPosition.node === node;
    });

    if (cachedData) {
        return cachedData;
    }

    const {scrollHeight, clientHeight} = node;
    const maxScrollTop = scrollHeight - clientHeight;

    const scrollPosition: ScrollPositionType = {
        clientHeight,
        maxScrollTop,
        node,
        scrollHeight,
    };

    scrollPositionCacheList.push(scrollPosition);

    return scrollPosition;
}

export function updateScrollPositionCache(nodeList: Array<HTMLElement>): void {
    // clear array
    scrollPositionCacheList.splice(0);
    // populate array
    nodeList.forEach(getScrollPosition);
}

export function syncScroll(fromNode: HTMLElement, toNode: HTMLElement): void {
    const minScrollDeltaHeight = 1;
    const fromScroll = getScrollPosition(fromNode);
    const toScroll = getScrollPosition(toNode);

    const newTopPosition = (fromScroll.node.scrollTop / fromScroll.maxScrollTop) * toScroll.maxScrollTop;

    if (Math.abs(newTopPosition - toScroll.node.scrollTop) < minScrollDeltaHeight) {
        return;
    }

    toNode.scrollTo(0, newTopPosition);
}

export function debounce<ArgsType extends Array<unknown>>(
    wrappedFunction: (...args: ArgsType) => unknown,
    waitInMs: number
): (...args: ArgsType) => void {
    let timeout: NodeJS.Timeout | null = null;

    return function debouncedFunction(...args: ArgsType): void {
        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            wrappedFunction(...args);
        }, waitInMs);
    };
}
