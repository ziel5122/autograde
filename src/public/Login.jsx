/* eslint-env browser */
/* eslint react/prop-types: "warn" */
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';

import { loginUser, logoutUser } from '../data/actions';
import store from '../data/store';

const buttonStyle = {
  margin: 24,
};

let username;
let password;
let login = true;

const authenticateUser = () => {
  console.log(username);
  console.log(password);
  if (login) {
    store.dispatch(loginUser());
  } else {
    store.dispatch(logoutUser());
  }
  console.log(store.getState());
  login = !login;
};

const Login = () => (
  <div className="login">
    <Paper className="login-paper">
      <TextField
        onChange={(input) => {
          username = input.target.value;
        }}
        floatingLabelText="username"
        name="username"
      />
      <br />
      <TextField
        onChange={(input) => {
          password = input.target.value;
        }}
        floatingLabelText="password"
        name="password"
        type="password"
      />
      <br />
      <FlatButton label="forgot" style={buttonStyle} />
      <FlatButton label="login" onTouchTap={authenticateUser} style={buttonStyle} />
    </Paper>
  </div>
);

export default Login;
