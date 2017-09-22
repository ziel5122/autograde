import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Subheader from './Subheader';
import Title from './Title';

const headerStyle = {
  display: 'flex',
  flex: 1,
  maxWidth: '1200px',
};

const style = {
  background: 'steelblue',
  color: 'whitesmoke',
  display: 'flex',
  justifyContent: 'center',
};

const subheaderStyle = {
  marginRight: '16px',
};

const titleStyle = {
  flex: 1,
  fontSize: '24px',
  lineHeight: '24px',
  margin: '8px',
  marginLeft: '24px',
};

const Header = () => (
  <div style={style}>
    <div style={headerStyle}>
      <Title style={titleStyle}/>
      <Subheader style={subheaderStyle}/>
    </div>
  </div>
);

Header.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Header;
