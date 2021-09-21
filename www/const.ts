/* global BUILD_DATE_H, IS_PRODUCTION */
/* eslint-disable id-match */

export const selector = {
    appWrapper: '.js-app-wrapper',
};

function sayHi() {
    const {log} = console;

    // http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Empty
    // Font: ANSI Shadow
    const hiString = `


    ███╗   ███╗ █████╗ ██████╗ ██╗  ██╗██████╗  ██████╗ ██╗    ██╗███╗   ██╗      ██████╗ ██████╗  ██████╗
    ████╗ ████║██╔══██╗██╔══██╗██║ ██╔╝██╔══██╗██╔═══██╗██║    ██║████╗  ██║      ██╔══██╗██╔══██╗██╔═══██╗
    ██╔████╔██║███████║██████╔╝█████╔╝ ██║  ██║██║   ██║██║ █╗ ██║██╔██╗ ██║█████╗██████╔╝██████╔╝██║   ██║
    ██║╚██╔╝██║██╔══██║██╔══██╗██╔═██╗ ██║  ██║██║   ██║██║███╗██║██║╚██╗██║╚════╝██╔═══╝ ██╔══██╗██║   ██║
    ██║ ╚═╝ ██║██║  ██║██║  ██║██║  ██╗██████╔╝╚██████╔╝╚███╔███╔╝██║ ╚████║      ██║     ██║  ██║╚██████╔╝
    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═══╝      ╚═╝     ╚═╝  ╚═╝ ╚═════╝


`;

    log(hiString);

    log('Build date:', BUILD_DATE_H);
    log('Is production:', IS_PRODUCTION);
}

sayHi();
