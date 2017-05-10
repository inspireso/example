/*
 * Copyright (c) 2015, Inspireso and/or its affiliates. All rights reserved.
 */

'use strict';

var React = require('react');
var Link = require('react-router').Link;
var PropTypes = require('prop-types');

module.exports = class Pager extends React.Component {
  static propTypes = {
    refresh: PropTypes.func.isRequired,
    page: PropTypes.object.isRequired,
    links: PropTypes.object.isRequired
  };


  render() {
    let previousDisabled = this.props.links.prev ? null : 'disabled';
    let nextDisabled = this.props.links.next ? null : 'disabled';
    return (
      <div className="btn-group">
        <a className="btn btn-default" href="#" onClick={this.previousClick.bind(this)}
           disabled={previousDisabled}>
                    <span className="glyphicon glyphicon-menu-left" aria-hidden="true"
                          disabled={previousDisabled}></span>
        </a>
        <a className="btn btn-default" href="#" onClick={this.nextClick.bind(this)}
           disabled={nextDisabled}>
          <span className="glyphicon glyphicon-menu-right" aria-hidden="true"
                disabled={nextDisabled}></span>
        </a>
      </div>
    )
  }

  previousClick(event) {
    event.preventDefault();
    if (event.target.hasAttribute('disabled')) {
      return;
    }

    const page = this.props.page.number > 1 ? this.props.page.number : 1;
    const previousPage = page - 1;
    this.props.refresh(previousPage, this.props.page.size);
  }

  nextClick(event) {
    event.preventDefault();
    if (event.target.hasAttribute('disabled')) {
      return;
    }

    const page = this.props.page.number > 0 ? this.props.page.number : 0;
    const nextPage = page + 1;
    this.props.refresh(nextPage, this.props.page.size);
  }
}
;
