import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

import Layout from './Layout';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Main = () => (
  <MuiThemeProvider>
    <Layout />
  </MuiThemeProvider>
);

export default Main;
