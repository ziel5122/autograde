/* eslint-env browser */
/* eslint react/prop-types: "warn" */
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';
// import { Redirect } from 'react-router';

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

    console.log(this.isAuthenticated);

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    const username = this.state.username;
    const password = this.state.password;

    console.log(username);
    console.log(password);

    this.props.onLogin({
      username,
      password,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    /*
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from.pathname} />
      );
    }
    */
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
          <FlatButton label="forgot" onTouchTap={this.props.onLogout} style={buttonStyle} />
          <FlatButton label="login" onTouchTap={this.login} style={buttonStyle} />
        </Paper>
      </div>
    );
  }
}

export default Login;
