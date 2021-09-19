/* global document */

import {render} from 'react-dom';

import {selector} from './const';
import {ExampleApp} from './component/app/example-app';

const nodeWrapper = document.querySelector(selector.appWrapper);

if (nodeWrapper !== null) {
    render(<ExampleApp />, nodeWrapper);
} else {
    console.error('Can not find nodeWrapper');
}
