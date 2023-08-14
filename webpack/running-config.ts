import path from 'node:path';

import {Configuration} from 'webpack';
import nodeExternals from 'webpack-node-externals';
// Import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import {optimization} from './setting/optimization';
import {rules} from './setting/module/rules';
import {alias} from './setting/resolve/alias';
import {extensions} from './setting/resolve/extensions';
import {plugins} from './setting/plugins';
import {devServer} from './setting/dev-server';
import {watchOptions} from './setting/watch-options';

// In order to ignore all modules in node_modules folder
const externals = [nodeExternals()];
// In order to ignore built-in modules like path, fs, etc.
const externalsPresets = {node: true};

import {
    pathToStaticFileFolder,
    isDevelopment,
    pathToDistribution,
    cwd,
    nodeEnvironment,
    isBuildLibrary,
    isFront,
    isBack,
} from './config';

const configFront: Configuration = {
    devtool: 'source-map',
    entry: ['./www/css/root.scss', './www/root.tsx'],
    mode: nodeEnvironment,
    module: {rules},
    output: {
        assetModuleFilename: isDevelopment
            ? 'build-asset/[name]----[hash:6][ext][query]'
            : 'build-asset/[hash:6][ext][query]',
        chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[hash:6].chunk.js',
        filename: isDevelopment ? '[name].js' : 'index.js',
        path: path.join(cwd, pathToDistribution),
        pathinfo: false,
        publicPath: isDevelopment ? '/' : pathToStaticFileFolder,
    },
    plugins,
    resolve: {alias, extensions},
};

const configBack: Configuration = {
    ...configFront,
    entry: ['./server/server.tsx'],
    externals,
    externalsPresets,
    target: 'node',
};

const configLibraryFront: Configuration = {
    devtool: 'source-map',
    entry: ['./www/library/library.ts'],
    externals,
    externalsPresets,
    mode: nodeEnvironment,
    module: {rules},
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        path: path.join(cwd, 'dist'),
        pathinfo: false,
        publicPath: '',
    },
    plugins,
    resolve: {alias, extensions},
};

const configLibraryBack: Configuration = {...configLibraryFront};

// eslint-disable-next-line complexity
const webpackConfig: Configuration = ((): Configuration => {
    if (isBuildLibrary && isFront) {
        return configLibraryFront;
    }

    if (isBuildLibrary && isBack) {
        return configLibraryBack;
    }

    if (!isBuildLibrary && isFront) {
        return configFront;
    }

    if (!isBuildLibrary && isBack) {
        return configBack;
    }

    throw new Error('Can not detect config');
})();

// WebpackConfig?.plugins?.push(new BundleAnalyzerPlugin());

export const webpackRunningConfig = {...webpackConfig, devServer, optimization, watchOptions};
