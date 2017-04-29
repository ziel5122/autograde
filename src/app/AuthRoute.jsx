/* eslint react/prop-types: "warn" */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    render={props => (
      isAuthenticated ?
        <Component {...props} /> :
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: props.location,
            },
          }}
        />
    )}
    {...rest}
  />
);

const AuthRouteRedux = connect(
  state => ({ isAuthenticated: state.isAuthenticated }),
  null,
)(AuthRoute);

export default AuthRouteRedux;
