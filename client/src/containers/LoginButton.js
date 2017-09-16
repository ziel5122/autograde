import React from 'react';
import { connect } from 'react-redux';

const LoginButton = ({ username, password }) => {
  console.log(login);

  const login = () => {
    console.log('username', 'password');
  };

  console.log(login);

  return (
    <div>
      <div>{username}</div>
      <div>{password}</div>
    </div>
  );
};

const mapStateToProps = ({ username, password }) => ({
  username,
  password,
});

export default connect(mapStateToProps)(LoginButton);

/*
const LoginButton = ({ username, password }) => (
  <div style={{ flex: 1 }}>
    <FlatButton
      backgroundColor="darkgray"
      hoverColor="orangered"
      onClick={() => {
        login(
          document.getElementById('username').value,
          document.getElementById('password').value,
        )
          .then((jwt) => {
            sessionStorage.setItem('jwt', jwt);
            this.props.setLoggedIn(true);
          })
          .catch(err => {
            this.setState({ errorText: err.message });
          });
      }}
      label="login"
      labelStyle={{ color: 'white' }}
      style={buttonStyles}
    />
  </div>
)
*/
