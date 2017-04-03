import fs from 'fs';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { Router, hashHistory } from 'react-router';

import configureStore from './store';
import makeMainRoutes from './routes';
import Main from './main/Main';

// eslint-disable-next-line no-sync
const template = fs.readFileSync(__dirname + '/../../public/index.html', 'utf8');

const routes = makeMainRoutes();

function renderApp(req, callback) {
  const store = configureStore();
  const state = store.getState();

  const rendered = renderToString(
    <MuiThemeProvider
      muiTheme={getMuiTheme({userAgent: req.headers['user-agent']})}
    >
      <Router routes={routes} history={hashHistory} />
    </MuiThemeProvider>
  );

  const page = template
    .replace('<!-- CONTENT -->', rendered)
    .replace('"-- STORES --"', JSON.stringify(state));

  callback(null, page);
}

module.exports = renderApp;
