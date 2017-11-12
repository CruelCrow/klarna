const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const config = function (env) {
    return webpackMerge(baseConfig(), {
        devtool: "cheap-module-source-map",
        watch: false,
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),

        ]
    })
};

module.exports = config