import Divider from 'material-ui/Divider';
import MaterialMenu from 'material-ui/Menu';
import Subheader from 'material-ui/Subheader';
import React from 'react';

import AssignmentList from './AssignmentList';
import OptionList from './OptionList';

const style = {
  background: 'white',
  borderBottom: 'orangered 2px solid',
  borderRight: 'orangered 2px solid',
  borderTop: 'orangered 2px solid',
  height: 'calc(100% - 92px)',
  position: 'absolute',
};

const Menu = ({ open, toggleOpen }) => (
  <div>{
    open ? (
      <MaterialMenu style={style}>
        <AssignmentList toggleOpen={toggleOpen} />
        <Divider />
        <OptionList />
      </MaterialMenu>
    ) : null
  }</div>
);

export default Menu;
