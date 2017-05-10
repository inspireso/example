/*
 * Copyright 2016 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 */

// TODO: Update configuration settings

var path = require('path');
var port = process.env.PORT || 80;
var host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
var jar = path.resolve(__dirname, '../../spring-boot-demo/target/bootstrap.jar');

var config = {
    port: port,
    host: host,
    proxy: 'http://localhost:8081',

    url: `http://${host}`, // Your website URL
    title: 'DEMO',        // Your website title

    // 打包入口文件
    // The entry point for the bundle
    entry: {
      manage: './manage.jsx'
    },

    //配置部署环境
    deploy: {
    }
  }
  ;

module.exports = config;
