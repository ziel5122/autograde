import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';

import styles from './styles';

const { button, textField } = styles;

const Login = ({ setLoggedin }) => (
  <div>
    <Paper zDepth={0} style={styles.login}>
      <TextField
        floatingLabelFocusStyle={{ color: '#404040' }}
        floatingLabelText="username"
        style={textField}
        underlineFocusStyle={{ borderColor: '#404040' }}
      />
      <TextField
        floatingLabelFocusStyle={{ color: '#404040' }}
        floatingLabelText="password"
        style={textField}
        type="password"
        underlineFocusStyle={{ borderColor: '#404040' }}
      />
      <FlatButton
        onClick={() => setLoggedin(true)}
        label="login"
        style={button}
      />
      <FlatButton label="forgot" style={button} />
    </Paper>
  </div>
);

export default Login;
