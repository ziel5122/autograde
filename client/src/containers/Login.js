import jwt from 'jsonwebtoken';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import LoginButton from '../components/LoginButton';

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
  constructor() {
    super();
    this.state = { errorText: '' };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleLoginResponse = this.handleLoginResponse.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case ENTER_KEY:
        this.login();
        break;
      default:
        break;
    }
  }

  handleLoginResponse(loginResponse) {
    switch (loginResponse.status) {
      case 200:
        loginResponse.json()
          .then(({ token, privilege }) => {
            sessionStorage.setItem('jwt', token);
            this.props.setLoggedIn(true);
            this.props.setAdmin(privilege === 'admin');
          })
          .catch((err) => {
            throw new Error(err);
          });
        break;
      case 400:
        this.setState({ errorText: 'username or password incorrect' });
        break;
      case 500:
        this.setState({ errorText: 'server exploded' });
        break;
      default:
        throw new Error('unexpected status code');
    }
  }

  login() {
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
          this.setState({ errorText: 'error connecting to server' });
        });
    } else if (!username && !password) {
      this.setState({ errorText: 'username and password required' });
    } else if (!username) {
      this.setState({ errorText: 'username required' });
    } else {
      this.setState({ errorText: 'password required' });
    }
  }

  render() {
    if (this.props.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: '/home' } };
      return <Redirect to={from} />;
    }

    return (
      <div style={loginStyles}>
        <Paper style={loginPaperStyles} zDepth={5}>
          <TextField
            defaultValue={this.props.username}
            floatingLabelText="username"
            id="username"
            {...textFieldProps}
          />
          <TextField
            defaultValue={this.props.password}
            floatingLabelText="password"
            id="password"
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
            {this.state.errorText}
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ login: { loggedIn } }) => ({
  loggedIn,
});

const mapDispatchToProps = dispatch => ({
  setAdmin(admin) {
    dispatch({
      admin,
      type: 'SET_ADMIN',
    });
    console.log('admin set');
  },

  setLoggedIn(loggedIn) {
    dispatch({
      loggedIn,
      type: 'SET_LOGGED_IN',
    });
  },

  setUsername(username) {
    dispatch({
      username,
      type: 'SET_USERNAME',
    });
  },

  setPassword(password) {
    dispatch({
      password,
      type: 'SET_PASSWORD',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
