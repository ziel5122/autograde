/* eslint-env browser */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main/Main';

import './index.css';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
