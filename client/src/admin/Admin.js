import Paper from 'material-ui/Paper';
import React from 'react';

import Body from './Body';
import Tabs from './Tabs';

const style = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  maxWidth: '1000px',
};

const Admin = () => (
  <div style={style}>
    <Tabs />
    <Body />
  </div>
);

export default Admin;
