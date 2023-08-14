import {WebpackOptionsNormalized} from 'webpack';

import {webpackDevServerPort} from '../config';

const serverPort = 3011;
const host = 'localhost';
// Const host = '192.168.147.45';

export const devServer: WebpackOptionsNormalized['devServer'] = {
    historyApiFallback: {
        disableDotRule: true,
    },
    host,
    hot: true,
    port: webpackDevServerPort,
    proxy: {
        // TODO: need watch nginx
        '/api-image/': {
            target: `http://127.0.0.1:${serverPort}/`,
        },
        '/api/': {
            target: `http://127.0.0.1:${serverPort}/`,
        },
        // TODO: need watch nginx
        '/static-file/': {
            target: `http://127.0.0.1:${serverPort}/`,
        },
    },
};
