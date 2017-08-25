import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import styles from './styles';

const App = ({ drawerOpen, toggleDrawer }) => (
  <div>
    <AppBar
      onLeftIconButtonTouchTap={toggleDrawer}
      style={{
        background: 'navy',
      }}
      title={<Link to="/" style={styles.title}>autograde</Link>}
    />
    <Drawer
      docked={false}
      onRequestChange={toggleDrawer}
      open={drawerOpen}
    >
      <Menu />
    </Drawer>
  </div>
);

export default App;
