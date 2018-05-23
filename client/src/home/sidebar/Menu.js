import Divider from 'material-ui/Divider';
import MaterialMenu from 'material-ui/Menu';
import React from 'react';

import AssignmentList from './AssignmentList';

const style = {
  background: 'white',
  borderBottom: 'orangered 2px solid',
  borderRight: 'orangered 2px solid',
  borderTop: 'orangered 2px solid',
  height: 'calc(100% - 128px)',
  maxWidth: '168px',
  position: 'absolute',
};

const Menu = ({ open, toggleOpen }) => (
  <div>{
    open ? (
      <MaterialMenu style={style}>
        <AssignmentList toggleOpen={toggleOpen} />
        <Divider />
      </MaterialMenu>
    ) : null
  }</div>
);

export default Menu;
