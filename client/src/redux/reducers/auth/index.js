import { combineReducers } from 'redux';

import {
  CLEAR_STATE,
  SET_ADMIN,
  SET_ERROR_TEXT,
  SET_LOGGED_IN,
  SET_USERNAME,
  SET_PASSWORD,
} from '../../types/auth';

const admin = (state = false, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return action.admin;
    default:
      return state;
  }
};

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return action.loggedIn
    default:
      return state;
  }
};

const errorText = (state = '', action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return '';
    case SET_ERROR_TEXT:
      return action.errorText;
    default:
      return state;
  }
};

const password = (state = '', action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return '';
    case SET_PASSWORD:
      return action.password;
    default:
      return state;
  }
};

const username = (state = '', action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return '';
    case SET_USERNAME:
      return action.username;
    default:
      return state;
  }
};

export default combineReducers({
  admin,
  errorText,
  loggedIn,
  username,
  password,
});
