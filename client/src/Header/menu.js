import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React from 'react';

import github from '../../img/GitHub-Mark-32px.png';

const Menu = () => (
  <IconMenu
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon color={'white'} />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Demo" />
    <MenuItem primaryText="Report a Problem" />
    <a href="http://github.com/ziel5122/autograde">
      <MenuItem style={{ textAlign: 'center' }}>
        <img style={{ marginTop: '16px' }} src={github} alt="github" />
      </MenuItem>
    </a>
  </IconMenu>
);

export default Menu;
