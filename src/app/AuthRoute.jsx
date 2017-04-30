import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ?
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

AuthRoute.propTypes = {
  component: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};

const AuthRouteRedux = connect(
  state => ({ isAuthenticated: state.isAuthenticated }),
)(AuthRoute);

export default AuthRouteRedux;
