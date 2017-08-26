import React from 'react';
import { connect } from 'react-redux';

import AuthRoute from './auth-route';

const mapDispatchToProps = (dispatch) => ({
  setFrom(from) {
    dispatch({
      from,
      type: 'SET_FROM',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(AuthRoute);
