/* eslint-env browser */
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import configureStore from './data/configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
