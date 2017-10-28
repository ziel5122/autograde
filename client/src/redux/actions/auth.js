import {
  CLEAR_STATE,
  SET_ADMIN,
  SET_ERROR_TEXT,
  SET_LOGGED_IN,
  SET_USERNAME,
  SET_PASSWORD,
} from '../types/auth';

const clearState = () => ({
  type: CLEAR_STATE,
});

const setAdmin = (admin) => ({
  admin,
  type: SET_ADMIN,
});

const setErrorText = (errorText) => ({
  errorText,
  type: SET_ERROR_TEXT,
});

const setLoggedIn = (loggedIn) => ({
  loggedIn,
  type: SET_LOGGED_IN,
});

const setPassword = (password) => ({
  password,
  type: SET_PASSWORD,
});

const setUsername = (username) => ({
  username,
  type: SET_USERNAME,
});

export {
  clearState,
  setAdmin,
  setErrorText,
  setLoggedIn,
  setUsername,
  setPassword,
 };
