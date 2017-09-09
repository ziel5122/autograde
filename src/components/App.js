import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Body from './Body';

const appStyles = {
  height: '100%',
};

const App = () => (
  <div style={appStyles}>
    <Header />
    <Body />
  </div>
);

export default withRouter(App);
