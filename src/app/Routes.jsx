/* eslint-env browser */
/* eslint react/prop-types: "warn" */
// import PropTypes from 'prop-types';
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
              state: {
                from: props.location,
              },
            }}
          />
        );
      }
    }
  />
);

class Routes extends React.Component {
  constructor(props) {
    super(props);

    this.LoginAuthenticate = this.LoginAuthenticate.bind(this);
  }

  LoginAuthenticate() {
    return (
      <Login
        {...this.props}
        authenticate={
          this.authenticate
        }
      />
    );
  }

  render() {
    return (
      <Switch className="switch">
        <AuthRoute
          exact path="/"
          component={Home}
          isAuthenticated={this.props.isAuthenticated}
        />
        <AuthRoute
          exact path="/cst334"
          component={OSHome}
          isAuthenticated={this.props.isAuthenticated}
        />
        <AuthRoute
          exact path="/cst463"
          component={DMHome}
          isAuthenticated={this.props.isAuthenticated}
        />
        <Route path="/demo" component={Demo} />
        <Route path="/login" component={this.LoginAuthenticate} />
      </Switch>
    );
  }
}

export default Routes;
