// @flow

import {parseHeader} from './parser/header';

export function markdown(mdInput: string): string {
    const mdLineList = mdInput.split('\n').map(parseHeader);

    return mdLineList.join('\n');
}

markdown('11');
