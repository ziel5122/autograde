const jwt = require('jsonwebtoken');
const { combineReducers } = require('redux');

let privilege;
let token;

if (typeof sessionStorage !== 'undefined') token = sessionStorage.getItem('jwt');
if (token) privilege = jwt.decode(token).privilege;

const admin = (state = (privilege === 'admin'), action) => {
  switch (action.type) {
    case 'SET_ADMIN':
      return action.admin;
    default:
      return state;
  }
}

const loggedIn = (
  state = !!token,
  action,
) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return action.loggedIn;
    default:
      return state;
  }
};

const loginErrorText = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR_TEXT':
      return action.errorText;
    default:
      return state;
  }
};

const password = (state = '', action) => {
  switch (action.type) {
    case 'SET_PASSWORD':
      return action.password;
    default:
      return state;
  }
};

const username = (state = '', action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
};

module.exports = combineReducers({
  admin,
  loggedIn,
  loginErrorText,
  username,
  password,
});
