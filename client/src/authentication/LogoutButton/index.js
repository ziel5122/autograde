import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LogoutButton from './logout-button';

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

const mapDispatchToProps = dispatch => ({
  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutButton));
