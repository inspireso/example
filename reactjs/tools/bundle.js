/*
 * Copyright 2016 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 */

//
// Bundle JavaScript, CSS and image files with Webpack
// -----------------------------------------------------------------------------
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = new Promise((resolve, reject) => {
  webpack(webpackConfig).run((err, stats) => {
    if (err) {
      reject(err);
    } else {
      console.log(stats.toString(webpackConfig.stats));
      resolve();
    }

  });
})
;
