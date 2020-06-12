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

export const unorderedList = {
    input: `
### unordered list
+ Create a list by starting a line with
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
### unordered list 2
+ Create a list by starting a line with 2
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
`,
    output: `
<h3>unordered list</h3>
<ul>
    <li>Create a list by starting a line with</li>
    <li>Sub-lists are made by indenting 2 spaces:</li>
    <li>Marker character change forces new list start:
        <ul>
            <li>Ac tristique libero volutpat at</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
        </ul>
    </li>
    <li>Very easy!</li>
</ul>
<h3>unordered list 2</h3>
<ul>
    <li>Create a list by starting a line with 2</li>
    <li>Sub-lists are made by indenting 2 spaces:</li>
    <li>Marker character change forces new list start:
        <ul>
            <li>Ac tristique libero volutpat at</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
        </ul>
    </li>
    <li>Very easy!</li>
</ul>
`,
};
