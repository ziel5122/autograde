import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

const muiTheme = getMuiTheme({
  slider: {
    handleFillColor: 'orangered',
    selectionColor: 'orangered',
    trackColor: 'orangered',
    trackColorSelected: 'orangered',
  },
  toggle: {
    thumbOnColor: 'orangered',
    trackOnColor: 'orangered',
  },
});

console.log(muiTheme.slider);

const store = createStore(reducers);

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

if (module.hot) {
  module.hot.accept();
}

render(<Main />, document.getElementById('root'));
