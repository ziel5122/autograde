import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';
import { Redirect } from 'react-router-dom';

import styles from './styles';

const login = (username, password, setLoggedIn) => {
  fetch('http://localhost:8892/login/authorize', {
    body: JSON.stringify({
      password: password,
      username: username,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'post',
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error("username or password incorrect");
      }
      return res.json();
    })
    .then((json) => {
      sessionStorage.setItem('jwt', json.token);
      setLoggedIn(true);
    })
    .catch((err) => {
      console.log('fail');
      console.log(err);
    });
};

const Login = ({ location, loggedIn, setLoggedIn }) => {
  if (loggedIn) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Redirect to={from} />;
  }

  return (
    <div style={styles.login}>
      <div style={styles.topSpacer} />
      <Paper style={styles.loginPaper}>
        <TextField
          floatingLabelFocusStyle={{ color: 'orangered' }}
          floatingLabelShrinkStyle={{ color: 'orangered' }}
          floatingLabelStyle={{ color: 'darkgray' }}
          floatingLabelText="username"
          id="username"
          style={styles.textField}
          underlineFocusStyle={{ borderColor: 'orangered' }}
          underlineStyle={{ borderColor: 'white' }}
        />
        <TextField
          floatingLabelFocusStyle={{ color: 'orangered' }}
          floatingLabelShrinkStyle={{ color: 'orangered' }}
          floatingLabelStyle={{ color: 'darkgray' }}
          floatingLabelText="password"
          id="password"
          style={styles.textField}
          type="password"
          underlineFocusStyle={{ borderColor: 'orangered' }}
          underlineStyle={{ borderColor: 'white' }}
        />
      <div style={styles.bottom}>
          <div style={{ flex: 1 }}>
            <FlatButton
                backgroundColor="darkgray"
                hoverColor="orangered"
                onClick={() => {
                  const username = document.getElementById('username').value;
                  const password = document.getElementById('password').value;
                  login(username, password, setLoggedIn);
                }}
                label="login"
                labelStyle={{ color: 'white' }}
                style={styles.button}
            />
          </div>
          <div style={styles.forgot}>
            Forgot your<br />password?
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
