import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './app';

const mapStateToProps = ({ drawerOpen }) => ({
  drawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },

  toggleDrawer() {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
