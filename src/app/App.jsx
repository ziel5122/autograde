// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { Route } from 'react-router-dom';
/*
import Demo from '../public/Demo';
import Login from '../public/Login';
*/
import Landing from '../public/Landing';

function App() {
  return (
    <div>
      Content.
      <Route component={Landing} />
    </div>
  );
}

export default App;
