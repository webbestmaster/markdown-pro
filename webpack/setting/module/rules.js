const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {isProduction, isDevelopment, fileRegExp, pathToLoadedFileFolder} = require('./../../config');

const styleLoader = {
    loader: 'style-loader',
    options: {attributes: {'class': 'my-css-module'}},
};

const cssLoader = isProduction ? MiniCssExtractPlugin.loader : styleLoader;

module.exports.rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    },
    {
        test: fileRegExp,
        use: [
            {
                loader: 'base64-inline-loader',
                options: {
                    limit: 1,
                    // limit: isProduction ? 1 : 1, // 1k bytes for production
                    name: pathToLoadedFileFolder.replace(/^\//, '') + '/[name]-[md5:hash:hex:7].[ext]',
                },
            },
        ],
    },
    {
        test: /\.scss$/,
        use: [
            cssLoader,
            'css-module-flow-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDevelopment,
                    modules: {
                        localIdentName: isDevelopment ? '[local]----[hash:6]' : '[hash:6]', // '[local]----[path]--[name]--[hash:6]'
                        // localIdentName: '[local]', // '[local]----[path]--[name]--[hash:6]'
                    },
                },
            },
            {loader: 'sass-loader', options: {sourceMap: isDevelopment}},
        ],
    },
    {
        test: /\.css$/,
        use: [
            cssLoader,
            'css-module-flow-loader',
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDevelopment,
                    modules: {
                        localIdentName: '[local]', // '[local]----[path]--[name]--[hash:6]'
                    },
                },
            },
        ],
    },
    {
        test: /\.(txt|md)$/i,
        use: 'raw-loader',
    },
];
