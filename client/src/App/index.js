import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './app';

const mapStateToProps = ({ drawerOpen }) => ({
  drawerOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer() {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
