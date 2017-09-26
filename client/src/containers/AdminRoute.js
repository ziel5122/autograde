import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const AuthRoute = ({ Component, admin, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      admin ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

const mapStateToProps = ({ login: { admin } }) => ({
  admin,
});

export default withRouter(connect(mapStateToProps)(AuthRoute));
