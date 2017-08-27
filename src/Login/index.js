import React from 'react';
import { connect } from 'react-redux';

import Login from './login';

const mapDispatchToProps = (dispatch) => ({
  setLoggedin(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(Login)
