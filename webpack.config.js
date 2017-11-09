const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = function () {
    return {
        entry: {
            bundle: './react_app/index.js',
            vendor: ['react', 'redux', 'react-redux', 'react-dom', 'react-router', 'redux-promise', 'redux-thunk', 'redux-form', 'jquery', 'lodash', 'axios', 'cookie-parser']
        },
        output: {
            path: path.resolve('build'),
            filename: '[name].js'
        },
        watch: true,
        devtool: "source-map",
        module: {
            rules: [
                {
                    exclude: /node_modules|bower_components/,
                    loader: 'babel-loader',
                    test: /\.js$/,
                    query: {
                        presets: ['react', 'es2015'],
                        plugins: [],
                    }
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        loader: [
                            {
                                loader: 'css-loader',
                                options: {
                                    //modules: true,
                                    sourceMap: false,
                                    sourceMapContents: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: false,
                                    sourceMapContents: false
                                }
                            }
                        ]
                    })
                }
            ]
        },

        plugins: [
            new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
            new ExtractTextPlugin({filename: "bundle.css", disable: false, allChunks: true}),

            // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : '"development"', // process.env.NODE_ENV is declared on Heroku or CI environment
                }
            })
        ],
    }
};

module.exports = config;
