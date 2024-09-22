import {describe, expect, it} from "@jest/globals";

import markdownPro, {markdown, type MarkdownConfigShallowType} from "../../library";
import {fixtureBlockquote} from "./fixture/blockquote";
import {fixtureCheckbox} from "./fixture/checkbox";
import {fixtureCode, fixtureCodeHighlight, fixtureCodeHighlightNoLang} from "./fixture/code";
import {fixtureFootnote} from "./fixture/footnote";
import {fixtureHeader} from "./fixture/header";
import {fixtureHtml} from "./fixture/html";
import {fixtureImage} from "./fixture/image";
import {fixtureLine} from "./fixture/line";
import {fixtureLink} from "./fixture/link";
import {fixtureMail} from "./fixture/mail";
import {fixtureMix1} from "./fixture/mix-1";
import {fixtureOrderedList} from "./fixture/ordered-list";
import {fixturePairTag} from "./fixture/pair-tag";
import {fixtureParagraph} from "./fixture/paragraph";
import {fixtureDoNotParseLink, fixtureParseLink} from "./fixture/parse-link";
import {fixtureDoNotParseMail, fixtureParseMail} from "./fixture/parse-mail";
import {fixtureTable1, fixtureTable2, fixtureTable3} from "./fixture/table";
import {fixtureUnorderedList} from "./fixture/unordered-list";
import {fixtureVariable} from "./fixture/variables";
import {stringReverse} from "./util";

function mdDoNotBreakLine(input: string): string {
    return markdown(input, {useWrapper: false});
}

function mdUseBreakLine(input: string): string {
    const configUseBreakLine: MarkdownConfigShallowType = {
        useLineBreak: true,
        useWrapper: false,
    };

    return markdown(input, configUseBreakLine);
}

// eslint-disable-next-line max-statements
describe("markdown-pro test", () => {
    it("import", () => {
        expect.assertions(1);
        expect(markdownPro).toBe(markdown);
    });

    it("header", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureHeader.input)).toBe(fixtureHeader.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureHeader.input)).toBe(fixtureHeader.outputUseBreakLine);
    });

    it("paragraph", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureParagraph.input)).toBe(fixtureParagraph.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureParagraph.input)).toBe(fixtureParagraph.outputUseBreakLine);
    });

    it("html", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureHtml.input)).toBe(fixtureHtml.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureHtml.input)).toBe(fixtureHtml.outputUseBreakLine);
    });

    it("line", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureLine.input)).toBe(fixtureLine.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureLine.input)).toBe(fixtureLine.outputUseBreakLine);
    });

    it("pair tag", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixturePairTag.input)).toBe(fixturePairTag.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixturePairTag.input)).toBe(fixturePairTag.outputUseBreakLine);
    });

    it("unordered list", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureUnorderedList.input)).toBe(fixtureUnorderedList.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureUnorderedList.input)).toBe(fixtureUnorderedList.outputUseBreakLine);
    });

    it("ordered list", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureOrderedList.input)).toBe(fixtureOrderedList.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureOrderedList.input)).toBe(fixtureOrderedList.outputUseBreakLine);
    });

    it("image", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureImage.input)).toBe(fixtureImage.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureImage.input)).toBe(fixtureImage.outputUseBreakLine);
    });

    it("checkbox", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureCheckbox.input)).toBe(fixtureCheckbox.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureCheckbox.input)).toBe(fixtureCheckbox.outputUseBreakLine);
    });

    it("link", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureLink.input)).toBe(fixtureLink.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureLink.input)).toBe(fixtureLink.outputUseBreakLine);
    });

    it("mail", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureMail.input)).toBe(fixtureMail.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureMail.input)).toBe(fixtureMail.outputUseBreakLine);
    });

    it("blockquote", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureBlockquote.input)).toBe(fixtureBlockquote.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureBlockquote.input)).toBe(fixtureBlockquote.outputUseBreakLine);
    });

    it("code", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureCode.input)).toBe(fixtureCode.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureCode.input)).toBe(fixtureCode.outputUseBreakLine);
    });

    it("code highlight", () => {
        expect.assertions(2);

        function codeHighlight(langName: string, code: string): string {
            // eslint-disable-next-line jest/no-conditional-in-test
            if (langName !== fixtureCodeHighlight.langName) {
                throw new Error("codeHighlight: wrong langName");
            }

            // eslint-disable-next-line jest/no-conditional-in-test
            if (code !== fixtureCodeHighlight.code) {
                throw new Error("codeHighlight: wrong code");
            }

            return stringReverse(code);
        }

        const configDoNotBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useLineBreak: true,
            useWrapper: false,
        };

        expect(markdown(fixtureCodeHighlight.input, configDoNotBreakLine)).toBe(
            fixtureCodeHighlight.outputDoNotBreakLine
        );
        expect(markdown(fixtureCodeHighlight.input, configUseBreakLine)).toBe(fixtureCodeHighlight.outputUseBreakLine);
    });

    it("code highlight: no lang", () => {
        expect.assertions(2);

        function codeHighlight(langName: string, code: string): string {
            // eslint-disable-next-line jest/no-conditional-in-test
            if (langName !== fixtureCodeHighlightNoLang.langName) {
                throw new Error("codeHighlight - no lang: wrong langName");
            }

            // eslint-disable-next-line jest/no-conditional-in-test
            if (code !== fixtureCodeHighlightNoLang.code) {
                throw new Error("codeHighlight - no lang: wrong code");
            }

            return stringReverse(code);
        }

        const configDoNotBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            codeHighlight,
            useLineBreak: true,
            useWrapper: false,
        };

        expect(markdown(fixtureCodeHighlightNoLang.input, configDoNotBreakLine)).toBe(
            fixtureCodeHighlightNoLang.outputDoNotBreakLine
        );
        expect(markdown(fixtureCodeHighlightNoLang.input, configUseBreakLine)).toBe(
            fixtureCodeHighlightNoLang.outputUseBreakLine
        );
    });

    it("parse link", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureParseLink.input)).toBe(fixtureParseLink.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureParseLink.input)).toBe(fixtureParseLink.outputUseBreakLine);
    });

    it("parse mail", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureParseMail.input)).toBe(fixtureParseMail.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureParseMail.input)).toBe(fixtureParseMail.outputUseBreakLine);
    });

    it("do NOT parse link", () => {
        expect.assertions(2);

        const configDoNotBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useLineBreak: true,
            useWrapper: false,
        };

        expect(markdown(fixtureDoNotParseLink.input, configDoNotBreakLine)).toBe(
            fixtureDoNotParseLink.outputDoNotBreakLine
        );
        expect(markdown(fixtureDoNotParseLink.input, configUseBreakLine)).toBe(
            fixtureDoNotParseLink.outputUseBreakLine
        );
    });

    it("do NOT parse mail", () => {
        expect.assertions(2);

        const configDoNotBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useWrapper: false,
        };

        const configUseBreakLine: MarkdownConfigShallowType = {
            parseLink: false,
            useLineBreak: true,
            useWrapper: false,
        };

        expect(markdown(fixtureDoNotParseMail.input, configDoNotBreakLine)).toBe(
            fixtureDoNotParseMail.outputDoNotBreakLine
        );
        expect(markdown(fixtureDoNotParseMail.input, configUseBreakLine)).toBe(
            fixtureDoNotParseMail.outputUseBreakLine
        );
    });

    it("table", () => {
        expect.assertions(3);
        expect(mdDoNotBreakLine(fixtureTable1.input)).toBe(fixtureTable1.output);
        expect(mdUseBreakLine(fixtureTable2.input)).toBe(fixtureTable2.output);
        expect(
            markdown(fixtureTable3.input, {
                ...fixtureTable3.config,
                useWrapper: false,
            })
        ).toBe(fixtureTable3.output);
    });

    it("tootnote", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureFootnote.input)).toBe(fixtureFootnote.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureFootnote.input)).toBe(fixtureFootnote.outputUseBreakLine);
    });

    it("variables", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureVariable.input)).toBe(fixtureVariable.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureVariable.input)).toBe(fixtureVariable.outputUseBreakLine);
    });

    it("mix 1", () => {
        expect.assertions(2);
        expect(mdDoNotBreakLine(fixtureMix1.input)).toBe(fixtureMix1.outputDoNotBreakLine);
        expect(mdUseBreakLine(fixtureMix1.input)).toBe(fixtureMix1.outputUseBreakLine);
    });
});
