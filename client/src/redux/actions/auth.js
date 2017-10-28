import {
  SET_ADMIN,
  SET_ERROR_TEXT,
  SET_LOGGED_IN,
  SET_USERNAME,
  SET_PASSWORD,
} from '../action-types/auth';

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

export { setAdmin, setErrorText, setLoggedIn, setUsername, setPassword };
