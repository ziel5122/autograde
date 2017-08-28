import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';
import { Redirect } from 'react-router-dom';

import styles from './styles';

const { button, textField } = styles;

const Login = ({ previous, redirect, setLoggedIn, setRedirect }) => {
  console.log(previous);
  console.log(redirect);

  return redirect ? (
    <Redirect to={previous} />
  ) : (
    <div>
      <Paper zDepth={0} style={styles.login}>
        <TextField
          floatingLabelFocusStyle={{ color: 'orangered' }}
          floatingLabelText="username"
          floatingLabelStyle={{ color: 'darkgray' }}
          style={textField}
          underlineStyle={{ display: 'none' }}
        />
        <TextField
          floatingLabelFocusStyle={{ color: 'orangered' }}
          floatingLabelStyle={{ color: 'darkgray' }}
          floatingLabelText="password"
          style={textField}
          type="password"
          underlineStyle={{ display: 'none' }}
        />
        <FlatButton
          onClick={() => {
            setLoggedIn(true);
            setRedirect(true);
          }}
          label="login"
          style={button}
        />
        <FlatButton label="forgot" style={button} />
      </Paper>
    </div>
  );
};

export default Login;
