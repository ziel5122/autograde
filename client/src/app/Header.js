import React from 'react';

import Right from '../header/Right';
import Subheader from '../header/Subheader';

const headerStyle = {
  display: 'flex',
  flex: 1,
  maxWidth: '1000px',
  paddingLeft: '8px',
  paddingRight: '8px',
};

const style = {
  background: 'steelblue',
  color: 'whitesmoke',
  display: 'flex',
  justifyContent: 'center',
};

const Header = () => (
  <div style={style}>
    <div style={headerStyle}>
      <Subheader />
      <Right />
    </div>
  </div>
);

export default Header;
