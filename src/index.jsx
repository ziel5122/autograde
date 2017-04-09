/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
