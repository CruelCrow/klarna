const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const config = function (env) {
    return webpackMerge(baseConfig(), {
        devtool: 'source-map'
    });
};

module.exports = config;