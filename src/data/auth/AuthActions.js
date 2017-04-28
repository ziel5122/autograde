import Dispatcher from '../Dispatcher';
import AuthActionTypes from './AuthActionTypes';

const AuthActions = {
  loginUser(creds) {
    console.log(creds.username);
    console.log(creds.password);
    Dispatcher.dispatch({
      creds,
      type: AuthActionTypes.LOGIN_USER,
    });
  },

  logoutUser() {
    Dispatcher.dispatch({
      type: AuthActionTypes.LOGOUT_USER,
    });
  },
};

export default AuthActions;
