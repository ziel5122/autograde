import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';

const classes = [
  'Data Mining (CST463)',
  'Operating Systems (CST334)',
];

const classesTitle = 'Classes';

const publicMenu = [
  'Demo',
  'Report a Problem',
  'Contact',
];

const publicMenuTitle = 'Support';

function Menu() {
  const menu = [];
  let key = 0;
  menu.push(<Subheader key={key += 1}>{classesTitle}</Subheader>);
  classes.forEach((className) => {
    menu.push(<MenuItem key={key += 1}>{className}</MenuItem>);
  });
  menu.push(<Divider key={key += 1} />);
  menu.push(<Subheader key={key += 1}>{publicMenuTitle}</Subheader>);
  publicMenu.forEach((menuItem) => {
    menu.push(<MenuItem key={key += 1}>{menuItem}</MenuItem>);
  });

  return (
    <div>
      {menu}
    </div>
  );
}

export default Menu;
