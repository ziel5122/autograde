import { combineReducers } from 'redux';

import { loggedIn, loginErrorText, password, username } from './login';

export default combineReducers({
  loggedIn,
  loginErrorText,
  password,
  username,
});
