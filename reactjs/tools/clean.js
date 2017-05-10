/*
 * Copyright 2016 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 */

//
// Clean up the output directory
//
const path = require('path');
const del = require('del');
const fs = require('./utils/fs');

module.exports = Promise.resolve()
  .then(()=>del(['build'], {dot: false}))
  .then(()=> {
    return Promise.all(
      ['./build/assets/templates', './build/assets/static/images'].map((path) => fs.makeDir(path))
    )
  })
  .then(()=> {
    const imagesSource = path.resolve(__dirname, '../src/content/images/');
    const imagesTarget = path.resolve(__dirname, '../build/assets/static/images/');
    return fs.copyDir(imagesSource, imagesTarget)
  });
