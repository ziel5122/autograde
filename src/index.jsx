/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';

window.onload = () => {
  ReactDOM.render(<AppContainer />, document.getElementById('root'));
};
