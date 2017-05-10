/*
 * Copyright (c) 2015, Inspireso and/or its affiliates. All rights reserved.
 */

'use strict';

const React = require('react');
const {initState, extend} = require('react-extend');
const api = require('../../data/webapi');

const Toast = require('../../components/Toast');
const UserList = require('./UserList');
const Header = require('./Header');


module.exports = class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = initState();
  }

  componentDidMount() {
    this.search({
      page: 0,
      size: 50
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   this.state.update(this, {list: nextProps.location.state});
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.location.state != null;
  // }

  render() {
    if (!this.state.ready) {
      return Toast.showLoading();
    }

    var list = this.state.list && this.state.list.length > 0 ?
      <UserList list={this.state.list} onDelete={this.delete.bind(this)}/> : <div/>
    return (
      <div className="container-fluid">
        <Header onSearch={this.search.bind(this)}
                list={this.state.list}
                query={this.props.location.query}/>
        {list}
      </div>
    );

  }

  search(query) {
    var q = query
      ? extend({}, this.props.location.query, query)
      : this.props.location.query;

    api.user.findAll(q)
      .then(response => {
        this.state.update(this, {list: response});
        // this.setState({list :response});
        // this.context.router.replace({
        //   pathname: this.props.location.pathname,
        //   query: q,
        //   state: response
        // });
      });
  }

  delete(response) {
    this.search();
  }
}
;
