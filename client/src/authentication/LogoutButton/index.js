import React from 'react';
import { connect } from 'react-redux';

import LogoutButton from './logout-button';

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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
