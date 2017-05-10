/*
 * Copyright (c) 2015, Inspireso and/or its affiliates. All rights reserved.
 */

'use strict';

const React = require('react');
const {Link} = require('react-router');
const api = require('../../data/webapi');

module.exports = class UserList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    var body = this.props.list.map((item, index) => {
      return (
        <tr key={item.id} id={item.id}>
          <td>{index}</td>
          <td>{item.name}</td>
          <td>{item.sex}</td>
          <td>{item.tel}</td>
          <td>{item.address}</td>
          <td>
            <Link to={`/manage/user/${item.id}`}>编辑</Link>
            {this.delete(item.id)}
          </td>
        </tr>
      );
    });

    return (
      <table className="table">
        <thead>
        <tr>
          <th width="5px">#</th>
          <th width="120px">用户名</th>
          <th width="400px">性别</th>
          <th>电话</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        {body}
        </tbody>
      </table>
    );
  }

  handleClick(e) {
    api.user.delete(e.currentTarget.id)
      .then(response => {
        this.props.delete(response);
      });

  }

  delete(id) {
    return (
      <a className="btn btn-link" id={id}
         onClick={this.handleClick.bind(this)}>删除</a>
    );
  }

}
;
