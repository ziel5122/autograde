import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import io from 'socket.io-client';

import App from './App';
import configureStore from '../redux/utils/configureStore';

const muiTheme = getMuiTheme({
  slider: {
    handleFillColor: 'orangered',
    handleSize: 16,
    handleSizeActive: 24,
    selectionColor: 'orangered',
    trackColor: 'orangered',
    trackColorSelected: 'orangered',
    trackSize: 4,
  },
  stepper: {
    iconColor: 'orangered',
  },
  toggle: {
    thumbOnColor: 'orangered',
    trackOnColor: 'orangered',
  },
});

// const socket = io();

const store = configureStore();

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

export default Main;
