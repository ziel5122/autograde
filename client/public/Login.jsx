/* eslint-env browser */
/* eslint react/prop-types: "warn" */
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const buttonStyle = {
  margin: 24,
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
    this.authenticateUser = this.authenticateUser.bind(this);
  }

  authenticateUser() {
    const { username, password } = this;
    if (username && password) {
      fetch('/api/login', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((response) => {
        if (response.status === 200) {
          this.props.loginUser(username);
          this.setState({ redirectToReferrer: true });
        }
      }).catch(err => console.error(err));
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="login">
        <Paper className="login-paper">
          <TextField
            onChange={(input) => {
              this.username = input.target.value;
            }}
            floatingLabelText="username"
            name="username"
          />
          <br />
          <TextField
            onChange={(input) => {
              this.password = input.target.value;
            }}
            floatingLabelText="password"
            name="password"
            type="password"
          />
          <br />
          <FlatButton label="forgot" onTouchTap={this.logout} style={buttonStyle} />
          <FlatButton label="login" onTouchTap={this.authenticateUser} style={buttonStyle} />
        </Paper>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const LoginRedux = connect(
  null,
  dispatch => ({
    loginUser: (username) => {
      dispatch({
        username,
        type: 'LOGIN_USER',
      });
    },
  }),
)(Login);

export default LoginRedux;
