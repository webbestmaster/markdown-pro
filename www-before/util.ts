/* global setTimeout, clearTimeout */

// get from stackoverflow
// https://stackoverflow.com/questions/3913355/how-to-format-tidy-beautify-in-javascript
export function formatHtml(html: string): string {
    const tab: string = '\t';

    let result: string = '';

    let indent: string = '';

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
    scrollHeight: number;
    clientHeight: number;
    maxScrollTop: number;
    node: HTMLElement;
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
        scrollHeight,
        clientHeight,
        maxScrollTop,
        node,
    };

    scrollPositionCacheList.push(scrollPosition);

    return scrollPosition;
}

export function updateScrollPositionCache(nodeList: Array<HTMLElement>) {
    // clear array
    scrollPositionCacheList.splice(0);
    // populate array
    nodeList.forEach(getScrollPosition);
}

export function syncScroll(fromNode: HTMLElement, toNode: HTMLElement) {
    const minScrollDeltaHeight = 1;
    const fromScroll = getScrollPosition(fromNode);
    const toScroll = getScrollPosition(toNode);

    const newTopPosition = (fromScroll.node.scrollTop / fromScroll.maxScrollTop) * toScroll.maxScrollTop;

    if (Math.abs(newTopPosition - toScroll.node.scrollTop) < minScrollDeltaHeight) {
        return;
    }

    toNode.scrollTo(0, newTopPosition);
}

// @ts-ignore
export function debounce<FunctionType>(
    wrappedFunction: FunctionType,
    waitInMs: number,
    isImmediate?: boolean
): FunctionType {
    let timeout: TimeoutID | null = null;

    // @ts-ignore
    return function debouncedFunction() {
        // eslint-disable-next-line consistent-this, babel/no-invalid-this, unicorn/no-this-assignment
        const context = this;
        const argumentList = [...arguments];

        // eslint-disable-next-line unicorn/consistent-function-scoping
        function callLater() {
            timeout = null;

            if (!isImmediate) {
                // @ts-ignore
                Reflect.apply(wrappedFunction, context, argumentList);
            }
        }

        const isCallNow = isImmediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(callLater, waitInMs);

        if (!isCallNow) {
            return;
        }

        // @ts-ignore
        Reflect.apply(wrappedFunction, context, argumentList);
    };
}
