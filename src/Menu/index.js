import React from 'react';
import { connect } from 'react-redux';

import Menu from './menu';

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer() {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(Menu);
