import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

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
            style={textFieldStyles}
            underlineFocusStyle={{ borderColor: 'orangered' }}
            underlineStyle={{ borderColor: 'white' }}
          />
          <TextField
            floatingLabelFocusStyle={{ color: 'orangered' }}
            floatingLabelShrinkStyle={{ color: 'orangered' }}
            floatingLabelStyle={{ color: 'darkgray' }}
            floatingLabelText="password"
            id="password"
            style={textFieldStyles}
            type="password"
            underlineFocusStyle={{ borderColor: 'orangered' }}
            underlineStyle={{ borderColor: 'white' }}
          />
        <div style={{ color: 'red' }}>
            {this.state.errorText}
          </div>
          <div style={bottomStyles}>
            <div style={{ flex: 1 }}>
              <FlatButton
                backgroundColor="darkgray"
                hoverColor="orangered"
                onClick={() => {
                  login(
                    document.getElementById('username').value,
                    document.getElementById('password').value,
                  )
                    .then((jwt) => {
                      sessionStorage.setItem('jwt', jwt);
                      this.props.setLoggedIn(true);
                    })
                    .catch(err => {
                      this.setState({ errorText: err.message });
                    });
                }}
                label="login"
                labelStyle={{ color: 'white' }}
                style={buttonStyles}
              />
            </div>
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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
