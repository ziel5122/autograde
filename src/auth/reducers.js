import { combineReducers } from 'redux';

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './login-actions';
import { LOGOUT_SUCCESS } from './logout-actions';

// The auth reducer.
// The starting state sets authentication based on a token being in localStorage.
// In a real app, we would also want a util to check if the token is expired.
function auth(
  state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
  },
  action
) {
  switch(action.type) {
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    default:
      return state;
  }
}

// the assignments reducer
function assignments(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
}

// We combine the reducers here so they can be left split up above
const assignmentsApp = combineReducers({
  auth,
  assignments,
});

export default assignmentsApp;
