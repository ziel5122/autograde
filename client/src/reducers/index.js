import { combineReducers } from 'redux';

import { loggedIn, loginErrorText, password, username } from './login';
import editor from './editor';

export default combineReducers({
  editor,
  loggedIn,
  loginErrorText,
  password,
  username,
});
