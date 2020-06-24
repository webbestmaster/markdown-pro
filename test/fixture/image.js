// @flow

/* eslint-disable max-len */

export const fixtureImage = {
    input: `
    ### Images

![](https://placekitten.com/100/100)
     ![Minion](https://placekitten.com/110/110)
![Stormtroopocat](https://placekitten.com/120/120 "The Stormtroopocat")

Also, use image ![](https://placekitten.com/100/25) inline.
`,
    outputDoNotBreakLine: '<h3>Images</h3><img loading="lazy" src="https://placekitten.com/100/100" alt=""/> <img loading="lazy" src="https://placekitten.com/110/110" alt="Minion"/> <img loading="lazy" src="https://placekitten.com/120/120" alt="Stormtroopocat" title="The Stormtroopocat"/><p>Also, use image <img loading="lazy" src="https://placekitten.com/100/25" alt=""/> inline.</p>',
    outputUseBreakLine: '<h3>Images</h3><img loading="lazy" src="https://placekitten.com/100/100" alt=""/><br/><img loading="lazy" src="https://placekitten.com/110/110" alt="Minion"/><br/><img loading="lazy" src="https://placekitten.com/120/120" alt="Stormtroopocat" title="The Stormtroopocat"/><p>Also, use image <img loading="lazy" src="https://placekitten.com/100/25" alt=""/> inline.</p>',
};
