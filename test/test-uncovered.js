// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import {parseLine} from '../src/parser/parse-line';
import type {DocumentMetaType, FootnoteType, LineDataType, PairTagSelectorType} from '../src/parser/parser-type';
import {searchSiblingItem} from '../src/parser/util/navigation';

import {getIsAllSymbolsEqual} from '../src/parser/util/string';
import {emptyString} from '../src/render/render-const';

import {getOlTypeBySelector} from '../src/render/render-helper';
import {olNumericType, selectorHeaderList, selectorList} from '../src/parser/parser-selector';
import {getSelectorIndexList} from '../src/render/render-pair-tag';
import {defaultMarkdownConfig} from '../src/markdown-const';
import {addLineData} from '../src/parser/footnote/footnote';

import {defaultLineData} from './fixture/default-data';

describe('Markdown-pro test:uncovered', () => {
    it('parseLine', () => {
        const savedDataList: Array<LineDataType> = [defaultLineData];

        const documentMeta: DocumentMetaType = {
            tableLineData: null,
            codeLineData: null,
            config: defaultMarkdownConfig,
            footnoteList: [],
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
            selector: '',
            openTag: '',
            closeTag: '',
            equal: /\s/g,
        };

        assert(getSelectorIndexList('', pairTagSelector).length === 0);
    });

    it('addLineData', () => {
        const lineData: LineDataType = {
            lineIndex: 0,
            spaceCount: 0,
            selector: selectorHeaderList[0],
            line: '',
            trimmedLine: '',
            lineContent: '',
            childList: [],
            additionalLineList: [],
            config: defaultMarkdownConfig,
        };

        const toList: Array<FootnoteType> = [];

        addLineData(lineData, toList);

        assert(toList.length === 0);
    });
});
