import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

const { menuLink } = styles;

const Menu = ({ loggedIn, toggleDrawer }) => (
  <div>
    <Subheader>Classes</Subheader>
    <Link to="/cst334" style={menuLink(loggedIn)}>
      <MenuItem
        onClick={toggleDrawer}
        primaryText="Operating Systems (CST336)"
        style={menuLink(loggedIn)}
      />
    </Link>
    <Link to="/cst463" style={menuLink(loggedIn)}>
      <MenuItem
        onClick={toggleDrawer}
        primaryText="Data Mining (CST463)"
        style={menuLink(loggedIn)}
      />
    </Link>
    <Divider />
    <Subheader>{'Support'}</Subheader>
    <Link to="/demo" style={menuLink(loggedIn)}>
      <MenuItem onClick={toggleDrawer} primaryText="Demo" />
    </Link>
    <MenuItem primaryText="Report a Problem" />
    <MenuItem primaryText="Github" />
  </div>
);

export default Menu;