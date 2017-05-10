/*
 * Copyright 2016 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 */
const webpack = require('webpack');

var chars = 0;

function goToLineStart(nextMessage) {
  var str = "";
  for (; chars > nextMessage.length; chars--) {
    str += "\b \b";
  }
  chars = nextMessage.length;
  for (var i = 0; i < chars; i++) {
    str += "\b";
  }
  if (str) process.stderr.write(str);
}

module.exports =
  new webpack.ProgressPlugin(function (percentage, msg) {
    var state = msg;
    if (percentage < 1) {
      percentage = Math.floor(percentage * 100);
      msg = percentage + "% " + msg;
      if (percentage < 100) {
        msg = " " + msg;
      }
      if (percentage < 10) {
        msg = " " + msg;
      }
    }

    goToLineStart(msg);
    process.stderr.write(msg);
  });
