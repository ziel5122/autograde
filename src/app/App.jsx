import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';

function App(props) {
  // const { isAuthenticated } = props;
  console.log(props);
  return (
    <Router>
      <Main {...props} />
    </Router>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default App;
