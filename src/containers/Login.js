import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import config from '../../../exclude/config';

const bottomStyles = {
  display: 'flex',
};

const buttonStyles = {
  marginTop: '24px',
};

const forgotStyles = {
  color: 'darkgray',
  flex: 1,
  marginTop: '25px',
  textAlign: 'center',
};

const loginStyles = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
};

const loginPaperStyles = {
  paddingBottom: '48px',
  paddingLeft: '48px',
  paddingRight: '48px',
  paddingTop: '40px',
};

const textFieldStyles = {
  display: 'block',
};

const login = (username, password, setLoggedIn) => {
  fetch(`https://${config.serverIp}:8892/login/authorize`, {
    body: JSON.stringify({
      password,
      username,
    }),
    headers: {
      'content-type': 'application/json',
    },
    method: 'post',
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error('username or password incorrect');
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

const Login = (props) => {
  const { location, loggedIn, setLoggedIn } = props;

  if (loggedIn) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Redirect to={from} />;
  }

  return (
    <div id="login" style={styles.login}>
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

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

const mapDispatchToProps = dispatch => ({
  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
