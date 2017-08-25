import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

const Menu = ({ toggleDrawer }) => (
  <div>
    <Subheader children={'Classes'} />
    <Link to="/cst334" style={styles.menuLink}>
      <MenuItem
        children={'Operating Systems (CST334)'}
        onClick={toggleDrawer}
        style={styles.menuLink}
      />
    </Link>
    <Link to="/cst463" style={styles.menuLink}>
      <MenuItem
        children={'Data Mining (CST463)'}
        onClick={toggleDrawer}
        style={styles.menuLink}
      />
    </Link>
    <Divider />
    <Subheader children={'Support'} />
    <Link to="/demo" style={styles.menuLink}>
      <MenuItem onClick={toggleDrawer} children={'Demo'} />
    </Link>
    <MenuItem children={'Report a Problem'} />
    <MenuItem children={'Contact'} />
  </div>
);

export default Menu;
