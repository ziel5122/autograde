import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { Link } from 'react-router-dom';

import github from '../../public/GitHub-Mark-32px.png';
import styles from './styles';

const { menuLink, subheader } = styles;

const Menu = ({ loggedIn, toggleDrawer }) => (
  <div style={styles.menu}>
    <Subheader style={subheader}>Classes</Subheader>
    <Link to="/cst334" style={menuLink}>
      <MenuItem
        disabled={!loggedIn}
        onClick={toggleDrawer}
        primaryText="Operating Systems (CST334)"
      />
    </Link>
    <Link to="/cst463" style={menuLink}>
      <MenuItem
        disabled={!loggedIn}
        onClick={toggleDrawer}
        primaryText="Data Mining (CST463)"
      />
    </Link>
    <div style={{ flex: 1 }} />
    <Divider />
    <Subheader style={subheader}>{'Support'}</Subheader>
    <Link to="/demo" style={menuLink}>
      <MenuItem onClick={toggleDrawer} primaryText="Demo" />
    </Link>
    <MenuItem primaryText="Report a Problem" />
    <MenuItem style={{ textAlign: 'center' }}>
      <a href="http://github.com/ziel5122/autograde">
        <img style={{ marginTop: '16px' }} src={github} alt="github" />
      </a>
    </MenuItem>
  </div>
);

export default Menu;
