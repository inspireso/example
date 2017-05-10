/*
 *  Copyright (c)  2015. Sunisco and/or its affiliates.
 */

'use strict';

const React = require('react');
const {Link} = require('react-router');

module.exports = class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let previousDisabled = this.props.query.page > 0 ? null : 'disabled';
    let nextDisabled = this.props.list.length == this.props.query.size ? null : 'disabled';

    return (
      <div className="row">
        <div className="btn-toolbar" role="toolbar">
          <div className="col-md-8">
            <div className="btn-group">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-group col-xs-5">
                  <input ref="input" type="search" className="form-control"
                         placeholder="请输入名字查询"/>
                  <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">查询</button>
                    </span>
                  <span className="input-group-btn">
                      <Link to={`/manage/user/new`} className="btn btn-default">添加用户</Link>
                    </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="btn-group pull-right">
              <a className="btn btn-default" href="#" onClick={this.previousClick.bind(this)}
                 disabled={previousDisabled}>
                <span className="glyphicon glyphicon-menu-left" aria-hidden="true"
                      disabled={previousDisabled}></span>Previous
              </a>
              <a className="btn btn-default" href="#" onClick={this.nextClick.bind(this)}
                 disabled={nextDisabled}>Next
                <span className="glyphicon glyphicon-menu-right" aria-hidden="true"
                      disabled={nextDisabled}></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();

    var input = this.refs.input;
    this.props.onSearch({
      name: input.value,
      page: 0,
      size: this.props.query.size
    });
    input.focus()
  }

  previousClick(event) {
    event.preventDefault();

    if (event.target.hasAttribute('disabled')) {
      return;
    }

    const page = this.props.query.page > 1 ? this.props.query.page : 1;
    const previousPage = Number(page) - 1;
    this.props.onSearch({
      page: previousPage,
      size: this.props.query.size
    });
  }

  nextClick(event) {
    event.preventDefault();

    if (event.target.hasAttribute('disabled')) {
      return;
    }

    const page = this.props.query.page > 0 ? this.props.query.page : 0;
    const nextPage = 1 + Number(page);
    this.props.onSearch({
      page: nextPage,
      size: this.props.query.size
    });
  }
}
;
