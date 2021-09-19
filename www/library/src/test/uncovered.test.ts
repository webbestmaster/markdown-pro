/* global describe, it */

import assert from 'assert';

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
    it('parseLine', () => {
        const savedDataList: Array<LineDataType> = [defaultLineData];

        const documentMeta: DocumentMetaType = {
            codeLineData: null,
            config: defaultMarkdownConfig,
            footnoteList: [],
            tableLineData: null,
            variable: {},
        };

        assert(parseLine('', 0, [], [], savedDataList, documentMeta) === false);
    });

    it('searchSiblingItem', () => {
        assert(searchSiblingItem(defaultLineData, [], 1) === null);
    });

    it('getIsAllSymbolsEqual', () => {
        assert(getIsAllSymbolsEqual(emptyString) === true);
    });

    it('getOlTypeBySelector', () => {
        assert(getOlTypeBySelector(selectorList[0]) === olNumericType);
    });

    it('getSelectorIndexList', () => {
        const pairTagSelector: PairTagSelectorType = {
            closeTag: '',
            equal: /\s/g,
            openTag: '',
            selector: '',
        };

        assert(getSelectorIndexList('', pairTagSelector).length === 0);
    });

    it('addLineData', () => {
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

        assert(toList.length === 0);
    });

    it('makeFootnoteSuper', () => {
        const documentMeta: DocumentMetaType = {
            codeLineData: null,
            config: defaultMarkdownConfig,
            footnoteList: [],
            tableLineData: null,
            variable: {},
        };

        assert(makeFootnoteSuper('a[^a]', documentMeta) === '');
    });

    it('getSelectorIndexList', () => {
        const pairTagSelector: PairTagSelectorType = {
            closeTag: '',
            equal: /\s/,
            openTag: '',
            selector: '--',
        };

        assert.deepStrictEqual(getSelectorIndexList('--', pairTagSelector), []);
    });
});
