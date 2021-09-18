/* eslint-disable max-len */

export const fixtureVariable = {
    input: `
    ### Variables

[image-variable]: https://placekitten.com/100/100
[url variable]: http://example.com
[mail variable]: mail@example.com

![][image-variable]
![cat][image-variable]

[][url variable]
[to site][url variable]
[send mail][mail variable]

![][no-variable]
![cat][no-variable]

[][no-variable]
[to site][no variable]
[send mail][no variable]
`,
    outputDoNotBreakLine:
        '<h3>Variables</h3><p><img loading="lazy" src="https://placekitten.com/100/100"/> <img loading="lazy" src="https://placekitten.com/100/100" alt="cat"/></p><p><a href="http://example.com">http://example.com</a> <a href="http://example.com">to site</a> <a href="mailto:mail@example.com">send mail</a></p><p><img loading="lazy" src="no-variable"/> <img loading="lazy" src="no-variable" alt="cat"/></p><p><a href="no-variable">no-variable</a> <a href="no variable">to site</a> <a href="no variable">send mail</a></p>',
    outputUseBreakLine:
        '<h3>Variables</h3><p><img loading="lazy" src="https://placekitten.com/100/100"/><br/><img loading="lazy" src="https://placekitten.com/100/100" alt="cat"/></p><p><a href="http://example.com">http://example.com</a><br/><a href="http://example.com">to site</a><br/><a href="mailto:mail@example.com">send mail</a></p><p><img loading="lazy" src="no-variable"/><br/><img loading="lazy" src="no-variable" alt="cat"/></p><p><a href="no-variable">no-variable</a><br/><a href="no variable">to site</a><br/><a href="no variable">send mail</a></p>',
};
