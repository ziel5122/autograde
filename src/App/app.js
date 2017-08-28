import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Body from '../Body/body';
import Login from '../Login/login';
import Menu from '../Menu';
import styles from './styles';

const LogoutButton = ({ setLoggedIn }) => (
  <FlatButton label="logout" onClick={() => setLoggedIn(false)} />
);

const mapDispatchToProps = (dispatch) => ({
  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    })
  },
});

const LogoutButtonRedux = connect(undefined, mapDispatchToProps)(LogoutButton);

const App = ({ drawerOpen, toggleDrawer }) => (
  <div style={styles.app}>
    <AppBar
      iconElementRight={<LogoutButtonRedux />}
      onLeftIconButtonTouchTap={toggleDrawer}
      style={styles.appBar}
      title={<Link to="/" style={styles.title}>Autograde</Link>}
      zDepth={0}
    />
    <Drawer
      docked={false}
      onRequestChange={toggleDrawer}
      open={drawerOpen}
    >
      <Menu />
    </Drawer>
    <Body />
  </div>
);

export default App;
