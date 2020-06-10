// @flow

import {parseLine, parseLineData} from './parser/parse-line';

export function markdown(mdInput: string): string {
    const mdLineList = mdInput.split('\n').map(parseLine).map(parseLineData);

    return mdLineList.join('\n');
}

markdown('11');
