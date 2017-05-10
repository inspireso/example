/*
 * Copyright (c) 2017 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 *
 */

'use strict';

var React = require("react");
var $ = require("jquery");
var daterangepicker = require('bootstrap-daterangepicker');
require("./Daterangepicker.css");

var locale = {
  "format": "YYYY-MM-DD",
  "separator": " - ",
  "applyLabel": "确定",
  "cancelLabel": "取消",
  "fromLabel": "从",
  "toLabel": "到",
  "customRangeLabel": "Custom",
  "weekLabel": "周",
  "daysOfWeek": '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  "monthNames": '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  "firstDay": 1
};
var defaultOptions = {
  showDropdowns: true,
  singleDatePicker: true,
  locale: locale
};

module.exports = class DatePicker extends React.Component {
  componentDidMount() {
    $(this.refs.daterangepicker).daterangepicker($.extend({}, defaultOptions, this.props.options));
  }

  render() {
    return (
        <input ref="daterangepicker"
               className={this.props.className ? this.props.className : "form-control" }
               type="text"
               placeholder={this.props.placeholder}
               defaultValue={this.props.defaultValue}
        />
    );
  }

  getValue() {
    return this.refs.daterangepicker.value;
  }
}
;
