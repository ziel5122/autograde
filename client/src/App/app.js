import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Body from '../Body/body';
import Login from '../authentication/Login/login';
import LogoutButton from '../authentication/LogoutButton';
import Menu from '../Menu';
import styles from './styles';

const App = ({ drawerOpen, setLoggedIn, toggleDrawer }) => (
  <div style={styles.app}>
    <AppBar
      iconElementRight={<LogoutButton />}
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
