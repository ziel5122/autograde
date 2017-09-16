import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import LoginButton from './LoginButton';
import { login } from '../utils/login';

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: '',
    };
  }

  render() {
    if (this.props.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return <Redirect to={from} />;
    }

    return (
      <div id="login" style={loginStyles}>
        <Paper style={loginPaperStyles}>
          <TextField
            floatingLabelFocusStyle={{ color: 'orangered' }}
            floatingLabelShrinkStyle={{ color: 'orangered' }}
            floatingLabelStyle={{ color: 'darkgray' }}
            floatingLabelText="username"
            id="username"
            onChange={(e) => this.props.setUsername(e.target.value)}
            style={textFieldStyles}
            underlineFocusStyle={{ borderColor: 'orangered' }}
            underlineStyle={{ borderColor: 'white' }}
            value={this.props.username}
          />
          <TextField
            floatingLabelFocusStyle={{ color: 'orangered' }}
            floatingLabelShrinkStyle={{ color: 'orangered' }}
            floatingLabelStyle={{ color: 'darkgray' }}
            floatingLabelText="password"
            id="password"
            onChange={(e) => this.props.setPassword(e.target.value)}
            style={textFieldStyles}
            type="password"
            underlineFocusStyle={{ borderColor: 'orangered' }}
            underlineStyle={{ borderColor: 'white' }}
            value={this.props.password}
          />
        <div style={{ color: 'red' }}>
            {this.state.errorText}
          </div>
          <LoginButton />
          <div style={bottomStyles}>
            <div style={forgotStyles}>
              Forgot your<br />password?
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

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
