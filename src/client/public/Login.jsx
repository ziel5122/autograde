import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

import AuthService from '../../server/utils/AuthService';

const style = {
  margin: '0 auto',
  textAlign: 'center',
  paddingTop: 24,
  paddingRight: 48,
  paddingBottom: 36,
  paddingLeft: 48,
  display: 'inline-block',
};

class Login extends React.Component {
  getAuthParams() {
    return {
        email: findDOMNode(this.refs.email).value,
        password: findDOMNode(this.refs.password).value,
    };
  }

  login(e) {
    e.preventDefault();
    const { email, password } = this.getAuthParams();
    if (email && password) {
      this.props.auth.login(email, password, (jwt) => {
        console.log(jwt);
      });
    }
  }

  render() {
    return(
      <div>
        <Paper style={style} zDepth={5}>
          <h2>Login</h2>
          <TextField hintText="username" /><br />
          <TextField hintText="password" type="password" />
          <br />
          <br />
          <FlatButton label="forgot" onClick={this.login} />
          <FlatButton label="login" onClick={this.forgot} />
        </Paper>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object,
};

Login.propTypes = {
  location: PropTypes.object,
  auth: PropTypes.instanceOf(AuthService),
};

export default Login;
