import React from 'react';

import AdminButton from './AdminButton';
import DemoButton from './DemoButton';
import Title from './Title';

const style = {
  display: 'flex',
  flex: 1,
};

const Subheader = () => (
  <div style={style}>
    <Title />
    <DemoButton />
    <AdminButton />
  </div>
);

export default Subheader;
