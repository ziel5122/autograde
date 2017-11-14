import * as types from '../../types/auth';

export default (state = '', action) => {
  switch (action.type) {
    case types.CLEAR_STATE:
      return '';
    case types.SET_USERNAME:
      return action.username;
    default:
      return state;
  }
};
