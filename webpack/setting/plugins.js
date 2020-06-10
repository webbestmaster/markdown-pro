const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const {UnusedFilesWebpackPlugin} = require('unused-files-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const {isProduction, isDevelopment} = require('./../config');

// const date = new Date();

const definePluginParameters = {
    // BUILD_DATE: JSON.stringify(date.getTime()),
    // BUILD_DATE_H: JSON.stringify(date.toString()),
    // NODE_ENV: JSON.stringify(NODE_ENV),
    // IS_PRODUCTION: JSON.stringify(isProduction),
    // PROJECT_ID: JSON.stringify('my-best-project')
    // IS_DEVELOPMENT: JSON.stringify(IS_DEVELOPMENT)
};

// const staticFilesList = ['favicon.ico', 'robots.txt', 'ads.txt', 'gss-0.9.xsl', 'asset'];

module.exports.plugins = [
    new CircularDependencyPlugin({
        exclude: /node_modules/,
    }),
    new DuplicatePackageCheckerPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin(definePluginParameters),
    new HtmlWebpackPlugin({
        template: './www/index.html',
        minify: {
            collapseWhitespace: isProduction,
            removeComments: isProduction,
            minifyCSS: isProduction,
            minifyJS: isProduction,
        },
        hash: true,
        filename: './index.html',
    }),
    new ScriptExtHtmlWebpackPlugin({defaultAttribute: 'defer'}),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: isDevelopment ? '[name].css' : '[name].[hash:6].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash:6].css',
    }),
    // new CopyWebpackPlugin({
    //     patterns: staticFilesList.map(pathToFle => ({from: `./www/${pathToFle}`, to: `./${pathToFle}`})),
    // }),
    new UnusedFilesWebpackPlugin({
        patterns: ['www/**/*.*'],
        globOptions: {
            ignore: ['www/**/*.scss.flow', 'www/**/*.css.flow', 'www/asset/**/*'],
        },
    }),
    // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/),
];
