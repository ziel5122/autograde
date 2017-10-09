import jwt from 'jsonwebtoken';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import io from 'socket.io-client';

import App from './App';
import reducers from '../redux/reducers';

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

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducers, preloadedState)

const token = jwt.sign({}, process.env.JWT_SECRET);
/*
fetch('http://localhost:3000/assignments/get-assignments', {
  body: JSON.stringify({ token }),
  headers: { 'content-type': 'application/json' },
  method: 'post',
})
  .then(response => response.json())
  .then(assignments => {
    store.dispatch({
      assignments,
      type: 'SET_ASSIGNMENTS',
    });
  })
  .catch(err => console.log(err, err.stack));
*/
const socket = io();

socket.on('assignment', (assignment) => {
  store.dispatch({
    assignment,
    type: 'ADD_ASSIGNMENT',
  });
  console.log(store.getState());
});

socket.on('assignments', (assignments) => {
  store.dispatch({
    assignments,
    type: 'SET_ASSIGNMENTS',
  });
  console.log(store.getState());
});

socket.on('client', (message) => {
  console.log(message);
});

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
