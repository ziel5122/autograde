import jwt from 'jsonwebtoken';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import io from 'socket.io-client';

import { assignments, assignmentIds, editors, parts } from '../../../data';
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

const socket = io();

const initialState = {
  assignments,
  assignmentIds,
  editors,
  parts,
};

initialState.assignments = initialState.assignmentIds.reduce((
  newAssignments,
  assignmentId,
) => {
  newAssignments[assignmentId] = {
    ...initialState.assignments[assignmentId],
    openTab: initialState.assignments[assignmentId].partIds[0],
  };
  return newAssignments;
}, {});

const store = createStore(reducers, initialState);

console.log(store.getState());

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
