/*
 * Copyright (c) 2017. Sunisco and/or its affiliates.
 */

/* eslint-disable global-require */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require('./package.json');

const config = {
    context: path.resolve(__dirname, './src'),

    entry: {
      demo2: 'demo2/index.js'
    },

    // Options affecting the output of the compilation
    output: {
      path: path.resolve(__dirname, './build/assets'),
      filename: 'js/[name].js?[hash]',
      chunkFilename: 'js/[hash]/[id].js'
    },

    devtool: 'source-map',

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            name: 'images/[path][name].[ext]?[hash]',
            limit: 10000
          }
        }
      ]
    },

    plugins: [
      new ExtractTextPlugin({
        filename: 'css/[name].css?[hash]',
        disable: false,
        allChunks: true
      })
    ],

    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "./src")
      ],
      extensions: [".js", ".json", ".css"]
    },

    performance: {
      hints: "warning"
    }
  }
;

module.exports = config;
