import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import React from 'react';
import { Link } from 'react-router-dom';

import Body from '../Body/body';
import LogoutButton from '../authentication/LogoutButton';
import Menu from '../Menu';
import styles from './styles';

const App = ({ drawerOpen, toggleDrawer }) => (
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
