/* eslint-env browser */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import makeMainRoutes from './routes';
//import Main from './main/Main';

import './index.css';

const routes = makeMainRoutes();

function App() {
  return (
    <MuiThemeProvider>
      <Router routes={routes} history={hashHistory} />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
