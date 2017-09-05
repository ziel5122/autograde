import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import App from './App';
import reducers from './redux/reducers';

const store = createStore(reducers);

console.log(store.getState());

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: 'orangered',
    trackColor: 'orangered',
  },
});

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