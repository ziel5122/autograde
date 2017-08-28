import React from 'react';
import { connect } from 'react-redux';

import Login from './login';

const mapStateToProps = ({ previous, redirect }) => ({
  previous,
  redirect,
});

const mapDispatchToProps = (dispatch) => ({
  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },

  setRedirect(redirect) {
    dispatch({
      redirect,
      type: 'SET_REDIRECT',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
