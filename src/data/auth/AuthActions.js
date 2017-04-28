import Dispatcher from '../Dispatcher';
import LoginActionTypes from './AuthActionTypes';

const AuthActions = {
  loginUser(creds) {
    console.log('yathat');
    Dispatcher.dispatch({
      creds,
      type: LoginActionTypes.LOGIN_USER,
    });
  },

  logoutUser() {
    Dispatcher.dispatch({
      type: LoginActionTypes.LOGOUT_USER,
    });
  },
};

export default AuthActions;
