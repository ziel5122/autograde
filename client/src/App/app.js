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

const App = ({ drawerOpen, setLoggedIn, toggleDrawer }) => (
  <div style={styles.app}>
    <AppBar
      iconElementRight={
        <FlatButton
          label="logout"
          onClick={() => setLoggedIn(false)}
          style={{ color: 'white' }}
        />
      }
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
