/* eslint-env browser */
/* eslint react/prop-types: "warn" */
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Demo from '../public/Demo';
import DMHome from '../cst463/DMHome';
import Home from '../home/Home';
import Login from '../public/Login';
import OSHome from '../cst334/OSHome';

const AuthRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        );
      }
    }
  />
);

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

class Routes extends React.Component {
  constructor() {
    super();
    this.fromPath = '/';
    this.state = {
      isAuthenticated: false,
    };
    this.requireAuth = this.requireAuth.bind(this);
  }

  componentDidMount() {
    console.log('mount');
    this.requireAuth();
  }

  requireAuth() {
    const token = sessionStorage.getItem('token');

    if (token) {
      console.log('token');
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
        console.log(text);
        console.log(text === 'true');
        this.setState({ isAtuhenticated: true }, () => console.log(this.state.isAuthenticated));
      });
    } else {
      console.log('else');
      this.setState({ isAuthenticated: false });
      console.log(this.state.isAuthenticated);
    }
  }

  render() {
    return (
      <Switch className="switch">
        <AuthRoute
          exact path="/"
          component={Home}
          isAuthenticated={this.state.isAuthenticated}
        />
        <AuthRoute
          exact path="/cst334"
          component={OSHome}
          isAuthenticated={this.state.isAuthenticated}
        />
        <AuthRoute
          exact path="/cst463"
          component={DMHome}
          isAuthenticated={this.state.isAuthenticated}
        />
        <Route path="/demo" component={Demo} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default Routes;
