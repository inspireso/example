/*
 * Copyright 2016 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 */

//
// Copy ./index.html into the /public folder
// -----------------------------------------------------------------------------
const ejs = require('ejs');
const ncp = require('ncp');
const fs = require('./utils/fs');
const webpackConfig = require('./webpack.config');
const config = require('../src/config');

module.exports = Promise.resolve()
  .then(() => fs.readFile('./build/assets.json'))
  .then((content) => JSON.parse(content))
  .then(assets => {
    return Promise.all(
      Object.keys(webpackConfig.entry).map(function (key) {
        const opts = {filename: `./src/content/${key}.ejs`};
        const template = fs.readFileSync(opts.filename);
        const render = ejs.compile(template, opts);
        const output = render({debug: webpackConfig.debug, bundle: assets[key], config});
        return fs.writeFile(`./build/assets/templates/${key}.ftl`, output);
      })
    )
  })
;
