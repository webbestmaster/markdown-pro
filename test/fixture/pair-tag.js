// @flow

/* eslint-disable max-len */

export const fixturePairTag = {
    input: `
**This is bold text**

__This is underline text__

_This is italic text_

*This is italic text __too__*

***This is bold and italic text***

~~This is strikethrough text~~

*__**~~Combine styles!~~**__*

25^th^

C~2~H~5~OH
`,
    outputDoNotBreakLine:
        '<p><b>This is bold text</b></p><p><u>This is underline text</u></p><p><i>This is italic text</i></p><p><i>This is italic text <u>too</u></i></p><p><b><i>This is bold and italic text</i></b></p><p><strike>This is strikethrough text</strike></p><p><i><u><b><strike>Combine styles!</strike></b></u></i></p><p>25<sup>th</sup></p><p>C<sub>2</sub>H<sub>5</sub>OH</p>',
    outputUseBreakLine:
        '<p><b>This is bold text</b></p><p><u>This is underline text</u></p><p><i>This is italic text</i></p><p><i>This is italic text <u>too</u></i></p><p><b><i>This is bold and italic text</i></b></p><p><strike>This is strikethrough text</strike></p><p><i><u><b><strike>Combine styles!</strike></b></u></i></p><p>25<sup>th</sup></p><p>C<sub>2</sub>H<sub>5</sub>OH</p>',
};
