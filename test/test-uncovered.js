// @flow

import assert from 'assert';

import {describe, it} from 'mocha';

import {parseLine} from '../src/parser/parse-line';
import type {DocumentMetaType, LineDataType, PairTagSelectorType} from '../src/parser/parser-type';
import {searchSiblingItem} from '../src/parser/util/navigation';

import {getIsAllSymbolsEqual} from '../src/parser/util/string';
import {emptyString} from '../src/render/render-const';

import {getOlTypeBySelector} from '../src/render/render-helper';
import {olNumericType, selectorList} from '../src/parser/parser-selector';
import {getSelectorIndexList} from '../src/render/render-pair-tag';
import {defaultMarkdownConfig} from '../src/markdown-const';

import {defaultLineData} from './fixture/default-data';

describe('Markdown-pro test:uncovered', () => {
    it('parseLine', () => {
        const savedDataList: Array<LineDataType> = [defaultLineData];

        const documentMeta: DocumentMetaType = {
            codeLineData: null,
            useLineBreak: false,
            codeHighlight: defaultMarkdownConfig.codeHighlight,
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
});
