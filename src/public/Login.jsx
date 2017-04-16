import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';

const buttonStyle = {
  margin: 24,
};

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      username: '',
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
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
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
