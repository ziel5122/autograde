import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const AuthRoute = ({ Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

export default withRouter(connect(mapStateToProps)(AuthRoute));
