import Paper from 'material-ui/Paper';
import React from 'react';

import Body from './Body';
import Tabs from './Tabs';

const paperStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const style = {
  flex: 1,
  maxWidth: '1000px',
  width: '100%',
};

const Home = () => (
  <div style={style}>
    <Paper style={paperStyle} zDepth={5}>
      <Tabs />
      <Body />
    </Paper>
  </div>
);

export default Home;
