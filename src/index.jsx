/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

if (typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
