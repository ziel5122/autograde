import React from 'react';

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
  </div>
);

export default Subheader;
