import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const buttonStyles = {
  marginTop: '24px',
};

const labelStyles = {
  color: 'white',
};

const loginButtonStyles = {
  flex: 1,
};

const LoginButton = ({ login }) => (
  <div style={loginButtonStyles}>
    <FlatButton
      backgroundColor="darkgray"
      hoverColor="orangered"
      onClick={login}
      label="login"
      labelStyle={labelStyles}
      style={buttonStyles}
    />
  </div>
);

export default LoginButton;
