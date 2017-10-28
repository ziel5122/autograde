import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import {
  setAdmin,
  setErrorText,
  setLogin,
  setUsername,
  setPassword,
} from '../redux/actions/auth';
import { setUserPart } from '../redux/actions/user';
import LoginButton from './LoginButton';

const ENTER_KEY = 13;

const bottomStyles = {
  display: 'flex',
};

const errorTextStyles = {
  color: 'red',
  height: '18px',
  marginTop: '18px',
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
  paddingBottom: '56px',
  paddingLeft: '60px',
  paddingRight: '60px',
  paddingTop: '40px',
};

const textFieldStyles = {
  display: 'block',
};

const textFieldProps = {
  floatingLabelFocusStyle: { color: 'orangered' },
  floatingLabelShrinkStyle: { color: 'orangered' },
  floatingLabelStyle: { color: 'darkgray' },
  style: textFieldStyles,
  underlineFocusStyle: { borderColor: 'orangered' },
  underlineStyle: { borderColor: 'white' },
};

class Login extends PureComponent {
  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.login();
        break;
      default:
        break;
    }
  }

  handleLoginResponse = (loginResponse) => {
    const { dispatch, parts, setUserPart } = this.props;

    switch (loginResponse.status) {
      case 200:
        loginResponse.json()
          .then(({ privilege, token, userParts }) => {
            sessionStorage.setItem('jwt', token);
            dispatch(setLoggedIn(true));
            dispatch(setAdmin(privilege === 'admin'));
            dispatch(clearState());
            Object.keys(parts).forEach((partId) => {
              const part = userParts.find(userPart => (
                userPart.partId === partId
              ));
              if (part) {
                dispatch(setUserPart(part.id, { attempts: part.attempts }));
              } else {
                dispatch(
                  setUserPart(partId, { attempts: parts[partId].attempts })
                );
              }
            });
          })
          .catch((err) => {
            throw new Error(err);
          });
        break;
      case 400:
        dispatch(setErrorText('username or password incorrect'));
        break;
      case 500:
        dispatch(setErrorText('server exploded'));
        break;
      default:
        throw new Error('unexpected status code');
    }
  }

  login = () => {
    const { dispatch } = this.props;

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
      fetch('/login/authorize', {
        body: JSON.stringify({ password, username }),
        headers: { 'content-type': 'application/json' },
        method: 'post',
      })
        .then(this.handleLoginResponse)
        .catch((err) => {
          console.log(err, err.stack);
          dispatch(setErrorText('error connecting to server'));
        });
    } else if (!username && !password) {
      dispatch(setErrorText('username and password required'));
    } else if (!username) {
      dispatch(setErrorText('username required'));
    } else {
      dispatch(setErrorText('password required'));
    }
  }

  onPasswordChange = ({ target: { value } }) => {
    const { dispatch } = this.props;
    dispatch(setPassword(value));
  }

  onUsernameChange = ({ target: { value } }) => {
    const { dispatch } = this.props;
    dispatch(setUsername(value));
  }

  render() {
    if (this.props.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: '/home' } };
      return <Redirect to={from} />;
    }

    const { errorText, password, username } = this.props;

    return (
      <div style={loginStyles}>
        <Paper style={loginPaperStyles} zDepth={5}>
          <TextField
            defaultValue={username}
            floatingLabelText="username"
            id="username"
            onChange={this.onUsernameChange}
            {...textFieldProps}
          />
          <TextField
            defaultValue={password}
            floatingLabelText="password"
            id="password"
            onChange={this.onPasswordChange}
            type="password"
            {...textFieldProps}
          />
          <div style={bottomStyles}>
            <LoginButton login={this.login} />
            <div style={forgotStyles}>
              Forgot your<br />password?
            </div>
          </div>
          <div style={errorTextStyles}>
            {errorText}
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, parts }) => {
  const { errorText, loggedIn, username, password } = auth;

  return {
    errorText,
    loggedIn,
    username,
    parts,
    password,
  };
};

export default withRouter(connect(mapStateToProps)(Login));
