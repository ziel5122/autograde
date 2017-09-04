import React from 'react';
import { connect } from 'react-redux';

import OSHome from './home';

const mapDispatchToProps = (dispatch) => ({
  openAssignment() {
    dispatch({
      type: 'OPEN_ASSIGNMENT',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(OSHome);
