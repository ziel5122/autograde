import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const LogoutButton = ({ loggedIn, setLoggedIn }) => (
  loggedIn ? (
    <FlatButton
      label="logout"
      onClick={() => setLoggedIn(false)}
      style={{ color: 'white' }}
    />
  ) : null
);

export default LogoutButton;
