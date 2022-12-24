import assert from 'node:assert/strict';

import {describe, test} from '@jest/globals';

import {parseLine} from '../parser/parse-line';
import {DocumentMetaType, FootnoteType, LineDataType, PairTagSelectorType} from '../parser/parser-type';
import {searchSiblingItem} from '../parser/util/navigation';

import {getIsAllSymbolsEqual} from '../parser/util/string';
import {emptyString} from '../render/render-const';

import {getOlTypeBySelector} from '../render/render-helper';
import {olNumericType, selectorHeaderList, selectorList} from '../parser/parser-selector';
import {getSelectorIndexList} from '../render/render-pair-tag';
import {defaultMarkdownConfig} from '../markdown-const';
import {addLineData, makeFootnoteSuper} from '../parser/footnote/footnote';

import {defaultLineData} from './fixture/default-data';

describe('Markdown-pro test:uncovered', () => {
    test('parseLine', () => {
        const savedDataList: Array<LineDataType> = [defaultLineData];

        const documentMeta: DocumentMetaType = {
            codeLineData: null,
            config: defaultMarkdownConfig,
            footnoteList: [],
            tableLineData: null,
            variable: {},
        };

        assert.equal(parseLine('', 0, [], [], savedDataList, documentMeta), false);
    });

    test('searchSiblingItem', () => {
        assert.equal(searchSiblingItem(defaultLineData, [], 1), null);
    });

    test('getIsAllSymbolsEqual', () => {
        assert.equal(getIsAllSymbolsEqual(emptyString), true);
    });

    test('getOlTypeBySelector', () => {
        assert.equal(getOlTypeBySelector(selectorList[0]), olNumericType);
    });

    test('getSelectorIndexList', () => {
        const pairTagSelector: PairTagSelectorType = {
            closeTag: '',
            equal: /\s/g,
            openTag: '',
            selector: '',
        };

        assert.equal(getSelectorIndexList('', pairTagSelector).length, 0);
    });

    test('addLineData', () => {
        const lineData: LineDataType = {
            additionalLineList: [],
            childList: [],
            config: defaultMarkdownConfig,
            line: '',
            lineContent: '',
            lineIndex: 0,
            selector: selectorHeaderList[0],
            spaceCount: 0,
            trimmedLine: '',
        };

        const toList: Array<FootnoteType> = [];

        addLineData(lineData, toList);

        assert.equal(toList.length, 0);
    });

    test('makeFootnoteSuper', () => {
        const documentMeta: DocumentMetaType = {
            codeLineData: null,
            config: defaultMarkdownConfig,
            footnoteList: [],
            tableLineData: null,
            variable: {},
        };

        assert.equal(makeFootnoteSuper('a[^a]', documentMeta), '');
    });

    test('getSelectorIndexList', () => {
        const pairTagSelector: PairTagSelectorType = {
            closeTag: '',
            equal: /\s/,
            openTag: '',
            selector: '--',
        };

        assert.deepEqual(getSelectorIndexList('--', pairTagSelector), []);
    });
});
