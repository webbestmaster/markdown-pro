// @flow

/* eslint-disable max-len */

export const fixtureMail = {
    input: `
You can use like this [send email](email@example.com)
or [](email@example.com)
or email@example.com
or (email@example.com)
or [](email@example.com "send email")
or [send email](email@example.com "send email")
or [](email@example.com "send email" "Subject of email")
or [send email](email@example.com "send email" "Subject of email")
`,
    outputDoNotBreakLine:
        '<p>You can use like this <a href="mailto:email@example.com">send email</a> or <a href="mailto:email@example.com">email@example.com</a> or <a href="mailto:email@example.com">email@example.com</a> or (<a href="mailto:email@example.com">email@example.com</a>) or <a href="mailto:email@example.com" title="send email">email@example.com</a> or <a href="mailto:email@example.com" title="send email">send email</a> or <a href="mailto:email@example.com?subject=Subject of email" title="send email">email@example.com</a> or <a href="mailto:email@example.com?subject=Subject of email" title="send email">send email</a></p>',
    outputUseBreakLine:
        '<p>You can use like this <a href="mailto:email@example.com">send email</a><br/>or <a href="mailto:email@example.com">email@example.com</a><br/>or <a href="mailto:email@example.com">email@example.com</a><br/>or (<a href="mailto:email@example.com">email@example.com</a>)<br/>or <a href="mailto:email@example.com" title="send email">email@example.com</a><br/>or <a href="mailto:email@example.com" title="send email">send email</a><br/>or <a href="mailto:email@example.com?subject=Subject of email" title="send email">email@example.com</a><br/>or <a href="mailto:email@example.com?subject=Subject of email" title="send email">send email</a></p>',
};
