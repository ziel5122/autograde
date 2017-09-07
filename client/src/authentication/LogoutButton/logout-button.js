import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const LogoutButton = ({ history, loggedIn, setLoggedIn }) => (
  loggedIn ? (
    <FlatButton
      label="logout"
      onClick={() => {
        sessionStorage.removeItem('jwt');
        setLoggedIn(false);
        history.push('/');
      }}
      style={{ color: 'white' }}
    />
  ) : null
);

export default LogoutButton;
