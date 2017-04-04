/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function AppClient() {
  return (
    <Router>
      <App />
    </Router>
  );
}

window.onload = () => {
  ReactDOM.render(<AppClient />, document.getElementById('root'));
};
/*
if (typeof window !== 'undefined') {
}
*/
