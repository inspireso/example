/*
 * Copyright (c) 2017 Inspireso and/or its affiliates.
 * Licensed under the MIT License.
 *
 */

'use strict';

var React = require("react");
var $ = require("jquery");
require("fullcalendar");
require("fullcalendar/dist/locale-all.js");
require("fullcalendar/dist/fullcalendar.css");

var style = {
  width: '100%',
  height: '100%'
};

module.exports = class Calendar extends React.Component {
  componentDidMount() {
    $(this.refs.calendar).fullCalendar(this.props.options);
  }

  // componentWillUnmount() {
  // var div = $(this.refs.calendar);
  // }

  render() {

    return (
      <div ref='calendar' style={style}/>
    );
  }
}
;
