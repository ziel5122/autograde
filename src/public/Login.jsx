/* eslint-env browser */
/* eslint react/prop-types: "warn" */
import fetch from 'isomorphic-fetch';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';
import { Redirect } from 'react-router';

const buttonStyle = {
  margin: 24,
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    };

    this.forgot = this.forgot.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  forgot() {
    console.log('forgot triggered');
    console.log(this.state);
  }

  login() {
    const username = this.state.username;
    const password = this.state.password;

    const body = JSON.stringify({
      username,
      password,
    });

    const headers = {
      'Content-type': 'application/json',
    };

    fetch('http://localhost:3000/api/login', {
      body,
      headers,
      method: 'post',
    }).then(res => res.text()).then((token) => {
      sessionStorage.setItem('token', token);
      this.setState({ redirectToReferrer: true });
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { from } = this.props.location.pathname || { from: { pathname: '/' } };
    // console.log(this.props.location.pathname);
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      );
    }

    return (
      <div className="login">
        <Paper className="login-paper">
          <TextField
            floatingLabelText="username"
            name="username"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            floatingLabelText="password"
            name="password"
            onChange={this.handleChange}
            type="password"
          />
          <br />
          <FlatButton label="forgot" onTouchTap={this.forgot} style={buttonStyle} />
          <FlatButton label="login" onTouchTap={this.login} style={buttonStyle} />
        </Paper>
      </div>
    );
  }
}

export default Login;
