import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import Main from './main';
import reducers from './reducers'

const store = createStore(reducers, window.__PRELOADED_STATE);
delete window.__PRELOADED_STATE;

render(
  <Main store={store} />,
  document.getElementById('root')
);
