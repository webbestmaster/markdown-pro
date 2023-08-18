/* global NodeJS, setTimeout, clearTimeout, HTMLElement */

// Get from stackoverflow, https://stackoverflow.com/questions/3913355/how-to-format-tidy-beautify-in-javascript
export function formatHtml(html: string): string {
    const tab = "\t";

    let result = "";

    let indent = "";

    html.split(/>\s*</u).forEach((element: string) => {
        if (/^\/\w/u.test(element)) {
            indent = indent.slice(tab.length);
        }

        result += `${indent}<${element}>\r\n`;

        if (/^<?\w[^>]*[^/]$/u.test(element)) {
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
    // Clear array
    scrollPositionCacheList.splice(0);
    // Populate array
    nodeList.forEach(getScrollPosition);
}

export function syncScroll(fromNode: HTMLElement, toNode: HTMLElement): void {
    const minScrollDeltaHeight = 1;
    const fromScroll = getScrollPosition(fromNode);
    const toScroll = getScrollPosition(toNode);

    const updatedTopPosition = (fromScroll.node.scrollTop / fromScroll.maxScrollTop) * toScroll.maxScrollTop;

    if (Math.abs(updatedTopPosition - toScroll.node.scrollTop) < minScrollDeltaHeight) {
        return;
    }

    toNode.scrollTo(0, updatedTopPosition);
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
