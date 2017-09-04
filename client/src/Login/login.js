import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';
import { Redirect } from 'react-router-dom';

import styles from './styles';

const { textField } = styles;

const Login = ({ location, loggedIn, setLoggedIn }) => {
  if (loggedIn) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Redirect to={from} />;
  }

  return (
    <div style={styles.login}>
      <div style={styles.topSpacer} />
      <TextField
        floatingLabelFocusStyle={{ color: 'orangered' }}
        floatingLabelStyle={{ color: 'darkgray' }}
        floatingLabelText="username"
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
    <div style={{ display: 'flex', flex: 1 , width: '100%'}}>
        <div style={{ flex: 1 }}>
          <FlatButton
            backgroundColor="darkgray"
            hoverColor="orangered"
            onClick={() => setLoggedIn(true)}
            label="login"
            labelStyle={{ color: 'white' }}
            style={styles.button}
          />
        </div>
        <div style={styles.forgot}>Forgot your<br />password?</div>
      </div>
    </div>
  );
};

export default Login;
