import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import React from 'react';

const arrowStyle = {
  color: 'white',
};

const style = {
  background: 'orangered',
  paddingTop: '2px',
};

const MenuToggle = ({ open, toggleOpen }) => (
  <div onClick={toggleOpen} style={style}>{
    open ?
      <KeyboardArrowLeft style={arrowStyle} /> :
      <KeyboardArrowRight style={arrowStyle} />
  }</div>
);

export default MenuToggle;
