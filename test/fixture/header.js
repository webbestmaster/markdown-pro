// @flow

/* eslint-disable max-len */

export const fixtureHeader = {
    input: `
    #header 1
## header 2
###     header 3
#### header 4
##### long
header 5`,
    outputDoNotBreakLine: '<p>#header 1</p><h2>header 2</h2><h3>header 3</h3><h4>header 4</h4><h5>long header 5</h5>',
    outputUseBreakLine: '<p>#header 1</p><h2>header 2</h2><h3>header 3</h3><h4>header 4</h4><h5>long<br/>header 5</h5>',
};
