/* eslint react/prop-types: "warn" */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  console.log('authroute render');
  return (
    <Route
      {...rest}
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
    />
  );
};

const AuthRouteRedux = connect(
  state => ({ isAuthenticated: state.isAuthenticated }),
)(AuthRoute);

export default AuthRouteRedux;
