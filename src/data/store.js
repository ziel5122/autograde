import { createStore } from 'redux';

function authentication(state = {
  isAuthenticated: false,
}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        username: action.username,
        isAuthenticated: true,
      };

    case 'LOGOUT_USER':
      return {
        isAuthenticated: false,
      };

    default:
      return state;
  }
}

export default createStore(authentication);
