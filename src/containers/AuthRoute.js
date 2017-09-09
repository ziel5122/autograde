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

const mapDispatchToProps = dispatch => ({
  setPrevious(previous) {
    dispatch({
      previous,
      type: 'SET_PREVIOUS',
    });
  },

  setRedirect(redirect) {
    dispatch({
      redirect,
      type: 'SET_REDIRECT',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));
