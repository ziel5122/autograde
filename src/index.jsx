/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './app/App';
import assignmentsApp from './auth/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);

const store = createStoreWithMiddleware(autogradeReducers);

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
};
