import Paper from 'material-ui/Paper';
import React from 'react';

import HomeBody from './HomeBody';
import HomeTabs from './HomeTabs';

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
      <HomeTabs />
      <HomeBody />
    </Paper>
  </div>
);

export default Home;
