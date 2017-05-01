import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const classes = [
  'Operating Systems (CST334)',
  'Data Mining (CST463)',
];

const classesTitle = 'Classes';

const publicMenu = [
  'Demo',
  'Report a Problem',
  'Contact',
];

const publicMenuTitle = 'Support';

const Menu = ({ onTouchTap }) => (
  <div>
    <Subheader>{classesTitle}</Subheader>
    <Link className="menu-link" to="/cst334">
      <MenuItem onTouchTap={onTouchTap}>{classes[0]}</MenuItem>
    </Link>
    <Link className="menu-link" to="/cst463">
      <MenuItem onTouchTap={onTouchTap}>{classes[1]}</MenuItem>
    </Link>
    <Divider />
    <Subheader>{publicMenuTitle}</Subheader>
    <Link className="menu-link" to="/demo">
      <MenuItem onTouchTap={onTouchTap}>{publicMenu[0]}</MenuItem>
    </Link>
    <MenuItem>{publicMenu[1]}</MenuItem>
    <MenuItem>{publicMenu[2]}</MenuItem>
  </div>
);

Menu.propTypes = {
  onTouchTap: PropTypes.func.isRequired,
};

export default Menu;
