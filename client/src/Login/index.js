import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './login';

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);