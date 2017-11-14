import * as types from '../../types/auth';

export default (state = false, action) => {
  switch (action.type) {
    case types.SET_LOGGED_IN:
      return action.loggedIn
    default:
      return state;
  }
};
