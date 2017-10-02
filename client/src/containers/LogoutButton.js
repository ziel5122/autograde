import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LogoutButton = ({ history, loggedIn, setLoggedIn }) => (
  loggedIn ? (
    <FlatButton
      label="logout"
      onClick={() => {
        sessionStorage.removeItem('jwt');
        setAdmin(false);
        setLoggedIn(false);
        history.push('/');
        location.reload();
      }}
      style={{ color: 'white' }}
    />
  ) : null
);

const mapStateToProps = ({ login: { loggedIn } }) => ({
  loggedIn,
});

const mapDispatchToProps = dispatch => ({
  setAdmin(admin) {
    dispatch({
      admin,
      type: 'SET_ADMIN',
    });
  },

  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogoutButton));
