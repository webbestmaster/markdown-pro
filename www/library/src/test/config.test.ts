import {describe, expect,it} from "@jest/globals";

import {defaultMarkdownConfig, markdown, ThemeNameEnum} from "../../library";
import {themeClassNameMap} from "../markdown-const";

describe("markdown-pro test:config", () => {
    it("additional css class", () => {
        expect.assertions(2);
        const additionalCssClass = "additional-css-class";

        expect(markdown("", {wrapperClassName: additionalCssClass})).toContain(additionalCssClass);
        expect(markdown("")).toBe(
            `<div class="${defaultMarkdownConfig.wrapperClassName} ${themeClassNameMap[ThemeNameEnum.auto]}"></div>`
        );
    });
});
