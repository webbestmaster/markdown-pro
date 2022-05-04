/* eslint-disable max-len */

export const fixtureImage = {
    input: `
    ### Images

![](https://placekitten.com/100/100)
     ![Cat](https://placekitten.com/110/110)
![One more cat](https://placekitten.com/120/120 "The one more cat")
        ![One more cat with attribute](https://placekitten.com/130/130 "The one more cat with attribute" your-attribute="my value")

Also, use image ![](https://placekitten.com/100/25) inline.
`,
    outputDoNotBreakLine:
        '<h3>Images</h3><img loading="lazy" src="https://placekitten.com/100/100"/> <img loading="lazy" src="https://placekitten.com/110/110" alt="Cat"/> <img loading="lazy" src="https://placekitten.com/120/120" alt="One more cat" title="The one more cat"/> <img loading="lazy" src="https://placekitten.com/130/130" alt="One more cat with attribute" title="The one more cat with attribute" your-attribute="my value"/><p>Also, use image <img loading="lazy" src="https://placekitten.com/100/25"/> inline.</p>',
    outputUseBreakLine:
        '<h3>Images</h3><img loading="lazy" src="https://placekitten.com/100/100"/><br/><img loading="lazy" src="https://placekitten.com/110/110" alt="Cat"/><br/><img loading="lazy" src="https://placekitten.com/120/120" alt="One more cat" title="The one more cat"/><br/><img loading="lazy" src="https://placekitten.com/130/130" alt="One more cat with attribute" title="The one more cat with attribute" your-attribute="my value"/><p>Also, use image <img loading="lazy" src="https://placekitten.com/100/25"/> inline.</p>',
};
