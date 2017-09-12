import AppBar from 'material-ui/AppBar';
import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from '../containers/LogoutButton';
import Menu from './Menu';

const appBarStyles = {
  background: 'midnightblue',
};

const titleStyles = {
  color: 'white',
  textDecoration: 'none',
};

const Header = () => (
  <div>
    <AppBar
      iconElementLeft={<Menu />}
      iconElementRight={<LogoutButton />}
      style={appBarStyles}
      title={<Link to="/" style={titleStyles}>Autograde</Link>}
      zDepth={0}
    />
  </div>
);

export default Header;
