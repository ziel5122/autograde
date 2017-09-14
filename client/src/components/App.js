import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Body from './Body';

const appStyles = {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
};

const App = () => (
  <div style={appStyles}>
    <Header />
    <Body />
  </div>
);

export default withRouter(App);
