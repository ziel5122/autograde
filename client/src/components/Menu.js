import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React from 'react';

import github from '../images/GitHub-Mark-32px.png';

const anchorOrigin = {
  horizontal: 'right',
  vertical: 'top',
};

const imgStyles = {
  marginTop: '16px',
};

const menuItemStyles = {
  textAlign: 'center',
};

const targetOrigin = {
  horizontal: 'right',
  vertical: 'top',
};

const Menu = () => (
  <IconMenu
    anchorOrigin={anchorOrigin}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon color={'white'} />
      </IconButton>
    }
    targetOrigin={targetOrigin}
  >
    <MenuItem primaryText="Demo" />
    <MenuItem primaryText="Report a Problem" />
    <a href="http://github.com/ziel5122/autograde">
      <MenuItem style={menuItemStyles}>
        <img style={imgStyles} src={github} alt="github" />
      </MenuItem>
    </a>
  </IconMenu>
);

export default Menu;
