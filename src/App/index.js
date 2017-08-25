import React from 'react';
import { connect } from 'react-redux';

import App from './app';

const mapStateToProps = ({ drawerOpen }) => ({
  drawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer() {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
