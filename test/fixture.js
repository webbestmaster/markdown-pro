// @flow

export const fixtureHeader = {
    input: `
    #header 1
    ## header 2
###    header 3
### header 4`,
    output: `
    #header 1
<h2>header 2</h2>
<h3>header 3</h3>
<h3>header 4</h3>`,
};
