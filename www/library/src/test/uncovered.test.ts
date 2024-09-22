import {describe, expect, it} from "@jest/globals";

import {defaultMarkdownConfig} from "../markdown-const";
import {addLineData, makeFootnoteSuper} from "../parser/footnote/footnote";
import {parseLine} from "../parser/parse-line";
import {olNumericType, selectorHeaderList, selectorList} from "../parser/parser-selector";
import type {DocumentMetaType, FootnoteType, LineDataType, PairTagSelectorType} from "../parser/parser-type";
import {searchSiblingItem} from "../parser/util/navigation";
import {getIsAllSymbolsEqual} from "../parser/util/string";
import {emptyString} from "../render/render-const";
import {getOlTypeBySelector} from "../render/render-helper";
import {getSelectorIndexList} from "../render/render-pair-tag";
import {defaultLineData} from "./fixture/default-data";

describe("markdown-pro test:uncovered", () => {
    it("parseLine", () => {
        expect.assertions(1);

        const savedDataList: Array<LineDataType> = [defaultLineData];

        const documentMeta: DocumentMetaType = {
            codeLineData: null,
            config: defaultMarkdownConfig,
            footnoteList: [],
            tableLineData: null,
            variable: {},
        };

        expect(parseLine("", 0, [], [], savedDataList, documentMeta)).toBe(false);
    });

    it("searchSiblingItem", () => {
        expect.assertions(1);
        expect(searchSiblingItem(defaultLineData, [], 1)).toBeNull();
    });

    it("getIsAllSymbolsEqual", () => {
        expect.assertions(1);
        expect(getIsAllSymbolsEqual(emptyString)).toBe(true);
    });

    it("getOlTypeBySelector", () => {
        expect.assertions(1);
        expect(getOlTypeBySelector(selectorList[0])).toBe(olNumericType);
    });

    it("getSelectorIndexList by empty string", () => {
        expect.assertions(1);

        const pairTagSelector: PairTagSelectorType = {
            closeTag: "",
            equal: /\s/gu,
            openTag: "",
            selector: "",
        };

        expect(getSelectorIndexList("", pairTagSelector)).toHaveLength(0);
    });

    it("getSelectorIndexList by double dash", () => {
        expect.assertions(1);

        const pairTagSelector: PairTagSelectorType = {
            closeTag: "",
            equal: /\s/gu,
            openTag: "",
            selector: "--",
        };

        expect(getSelectorIndexList("--", pairTagSelector)).toStrictEqual([]);
    });

    it("addLineData", () => {
        expect.assertions(1);

        const lineData: LineDataType = {
            additionalLineList: [],
            childList: [],
            config: defaultMarkdownConfig,
            line: "",
            lineContent: "",
            lineIndex: 0,
            selector: selectorHeaderList[0],
            spaceCount: 0,
            trimmedLine: "",
        };

        const toList: Array<FootnoteType> = [];

        addLineData(lineData, toList);

        expect(toList).toHaveLength(0);
    });

    it("makeFootnoteSuper", () => {
        expect.assertions(1);

        const documentMeta: DocumentMetaType = {
            codeLineData: null,
            config: defaultMarkdownConfig,
            footnoteList: [],
            tableLineData: null,
            variable: {},
        };

        expect(makeFootnoteSuper("a[^a]", documentMeta)).toBe("");
    });
});
