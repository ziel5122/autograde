import React from 'react';
import { render } from 'react-dom';

import Main from './app/Main';

if (module.hot) {
  module.hot.accept();
}

render(<Main />, document.getElementById('root'));
