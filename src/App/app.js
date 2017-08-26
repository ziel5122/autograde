import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import React from 'react';
import { Link } from 'react-router-dom';

import Body from '../Body/body';
import Login from '../Login/login';
import Menu from '../Menu';
import styles from './styles';

const App = ({ drawerOpen, toggleDrawer }) => (
  <div style={styles.app}>
    <AppBar
      onLeftIconButtonTouchTap={toggleDrawer}
      style={styles.appBar}
      title={<Link to="/" style={styles.title}>autograde</Link>}
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
