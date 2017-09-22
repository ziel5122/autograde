import React from 'react';
import { connect } from 'react-redux';

const style = {
  fontSize: '16px',
  lineHeight: '16px',
  padding: '12px',
};

const LogoutButton = ({ logout }) => (
  <div
    className="logout"
    onClick={logout}
    role="button"
    style={style}
    tabIndex={0}
  >
    logout
    <style jsx>{`
      .logout {
        cursor: hand;
        cursor: pointer;
      }

      .logout:hover {
        background: rgba(106, 90, 205, .25);
      }
    `}</style>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch({
      loggedIn: false,
      type: 'SET_LOGGED_IN',
    });
    sessionStorage.removeItem('jwt');
  },
});

export default connect(null, mapDispatchToProps)(LogoutButton);
