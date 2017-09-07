import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AuthRoute from './auth-route';

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

const mapDispatchToProps = dispatch => ({
  setPrevious(previous) {
    dispatch({
      previous,
      type: 'SET_PREVIOUS',
    });
  },

  setRedirect(redirect) {
    dispatch({
      redirect,
      type: 'SET_REDIRECT',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthRoute));
