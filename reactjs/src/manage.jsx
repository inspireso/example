'use strict';

const React = require('react');
const render = require('react-dom').render;
const {Router, browserHistory} = require('react-router');
const {initState} = require('react-extend');
const webapi = require('./data/webapi');

const Navbar = require('./components/bootstrap/Navbar');
const index = require('./pages/user/Index');

require('./manage.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initState({
      items: [
        {
          title: '用户',
          path: '/manage/user',
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <Navbar home="/manage" brand="DEMO" items={this.state.items} {...this.props}>
          <ul className="nav navbar-nav navbar-right">
          </ul>
        </Navbar>
        <div className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

const rootRoute = {
  path: '/manage(.html)',
  component: App,
  indexRoute: {component: index},
  childRoutes: [
    {
      path: "user",
      component: index
    },
    {
      path: "user/:id",
      component: require('./pages/user/User')
    }
  ]
};


render((
    <Router history={browserHistory} routes={rootRoute}></Router>
  ), document.getElementById('app')
);
