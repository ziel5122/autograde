/* eslint-env browser */
// import fetch from 'isomorphic-fetch';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Demo from '../public/Demo';
import DMHome from '../cst463/DMHome';
import Home from '../home/Home';
import Login from '../public/Login';
import OSHome from '../cst334/OSHome';

function redirect(path) {
  return <Redirect to={path} />;
}

class Routes extends React.Component {
  constructor() {
    super();

    this.fromPath = '/';

    this.loginWithFromPath = this.loginWithFromPath.bind(this);
  }

  loginWithFromPath() {
    console.log(this.fromPath);
    return <Login fromPath={this.fromPath} />;
  }

  requireAuth(component, fromPath) {
    let returned = redirect('/login');
    const token = sessionStorage.getItem('token');

    if (token) {
      const body = JSON.stringify({
        token,
      });

      const headers = {
        'Content-type': 'application/json',
      };

      fetch('http://localhost:3000/api/verify', {
        body,
        headers,
        method: 'post',
      }).then(res => res.text()).then((text) => {
        if (text) {
          console.log(text);
          console.log(typeof(text));
          return component;
        }
      }).catch((err) => {
        console.error(err);
        console.log(returned);
        this.fromPath = fromPath;
        return returned;
      });
    }
  }

  render() {
    return (
      <Switch className="switch">
        <Route exact path="/" render={() => this.requireAuth(<Home />, '/')} />
        <Route path="/cst334" render={() => this.requireAuth(<OSHome />, '/cst334')} />
        <Route path="/cst463" render={() => this.requireAuth(<DMHome />, '/cst463')} />
        <Route path="/demo" component={Demo} />
        <Route path="/login" component={this.loginWithFromPath} />
      </Switch>
    );
  }
}

export default Routes;
