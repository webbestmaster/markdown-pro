/* global window, HTMLTextAreaElement, HTMLDivElement, HTMLPreElement, HTMLInputElement, HTMLSelectElement, Event */

import markdownPro, {ThemeNameEnum} from '../library/library';

import {debounce, formatHtml, syncScroll, updateScrollPositionCache} from './util';

function getThemeName(value: unknown): ThemeNameEnum {
    switch (value) {
        case ThemeNameEnum.auto: {
            return ThemeNameEnum.auto;
        }
        case ThemeNameEnum.dark: {
            return ThemeNameEnum.dark;
        }
        case ThemeNameEnum.light: {
            return ThemeNameEnum.light;
        }
        default: {
            console.warn('[getThemeName] can not detect theme name.');
        }
    }

    console.warn('[getThemeName] use ThemeNameEnum.auto.');
    return ThemeNameEnum.auto;
}

// eslint-disable-next-line max-params
export function init(
    textArea: HTMLTextAreaElement,
    output: HTMLDivElement,
    outputDebug: HTMLPreElement,
    useLineBreak: HTMLInputElement,
    parseLink: HTMLInputElement,
    themeName: HTMLSelectElement
): void {
    function refreshResult() {
        updateScrollPositionCache([textArea, output]);
        syncScroll(textArea, output);
    }

    function handleInput() {
        const inputValue = textArea.value;

        const markdownHtml = markdownPro(inputValue, {
            parseLink: parseLink.checked,
            themeName: getThemeName(themeName.value),
            useLineBreak: useLineBreak.checked,
        });

        // eslint-disable-next-line no-param-reassign
        output.innerHTML = markdownHtml;
        // eslint-disable-next-line no-param-reassign
        outputDebug.textContent = formatHtml(markdownHtml);
        refreshResult();
    }

    function handleScroll(evt: Event) {
        const element = evt.currentTarget;

        if (element === textArea) {
            syncScroll(textArea, output);
        } else {
            syncScroll(output, textArea);
        }
    }

    textArea.addEventListener('input', handleInput, false);

    textArea.addEventListener('scroll', handleScroll, {passive: true});
    output.addEventListener('scroll', handleScroll, {passive: true});
    output.addEventListener(
        'scroll',
        debounce((evt: Event) => {
            updateScrollPositionCache([textArea, output]);
            handleScroll(evt);
        }, 200),
        {passive: true}
    );

    useLineBreak.addEventListener('change', handleInput, false);
    parseLink.addEventListener('change', handleInput, false);
    themeName.addEventListener('change', handleInput, false);

    window.addEventListener('resize', refreshResult, false);
}
