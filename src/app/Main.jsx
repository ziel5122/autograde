import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Provider } from 'react-redux';

import Layout from './Layout';
import configureStore from '../data/configureStore';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

const Main = () => {
  console.log(store.getState());
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Layout />
      </Provider>
    </MuiThemeProvider>
  );
};

export default Main;
