import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Editor from './editor';

const mapDispatchToProps = (dispatch) => ({
  openAssignment() {
    dispatch({
      type: 'OPEN_ASSIGNMENT',
    });
  },
});

export default withRouter(connect(undefined, mapDispatchToProps)(Editor));
