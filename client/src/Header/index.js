import AppBar from 'material-ui/AppBar';
import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from './logout-button';
import Menu from './menu';
import styles from './styles';

const Header = () => (
  <div>
    <AppBar
      iconElementLeft={<Menu />}
      iconElementRight={<LogoutButton />}
      style={styles.appBar}
      title={<Link to="/" style={styles.title}>Autograde</Link>}
      zDepth={0}
    />
  </div>
);

export default Header;
