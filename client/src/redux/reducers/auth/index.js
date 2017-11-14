import { combineReducers } from 'redux';

import admin from './admin';
import errorText from './error-text';
import loggedIn from './logged-in';
import password from './password';
import username from './username';

export default combineReducers({
  admin,
  errorText,
  loggedIn,
  username,
  password,
});
