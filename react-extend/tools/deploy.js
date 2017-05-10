/*
 * Copyright 2016 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 */
"use strict";

const path = require('path');
const {uploadLargeFile, uploadFile, uploadDir, start, stop} = require('./utils/command');
const config = require('../src/config');

const target = process.argv.includes('--prod') ? config.deploy.prod : config.deploy.uat;

console.log(`###deploy server ${target.server}`);

function deploy() {
  return Promise.resolve()
    .then(() => {
      return uploadLargeFile(`${target.server}/upload`, target.jar, `${target.cwd}/bootstrap-upload.jar`);
    })
    .then(() => {
      return stop(target)
    })
    .then(() => {
      return start(target)
    })
    .catch(err => {
      console.log(err);
    })
}

function copy() {
  return Promise.resolve()
    .then(() => {
      // deploy static files
      let local = path.resolve(__dirname, '../build/assets/');
      let remove = `${target.cwd}/assets/`;
      console.log(`put directory ${local} -> ${remove}`);

      return uploadDir(`${target.server}/upload`, local, remove);
    })
    .then(successful => {
      console.log('copy done!');
    }).catch((error) => {
      console.log(error);
    });
}

function configScript() {
  return Promise.resolve()
    .then(() => {
      // deploy static files
      let local = path.resolve(__dirname, '../../spring-boot-demo/config/context');
      let remove = `${target.cwd}/config/context/`;
      console.log(`put directory ${local} -> ${remove}`);

      return uploadDir(`${target.server}/upload`, local, remove);
    })
    .then(successful => {
      console.log('copy done!');
    }).catch((error) => {
      console.log(error);
    });
}

module.exports = {
  deploy: deploy,
  copy: copy,
  config: configScript,
}
;
