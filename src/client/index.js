/* eslint-env browser */
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './main/Main';
import configureStore from './store';

const store = configureStore(window.initialStoreData);
window.dev = { store };

// Needed for onTouchTap
/* http://stackoverflow.com/a/34015469/988941 */
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Main title="Autograde" />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
