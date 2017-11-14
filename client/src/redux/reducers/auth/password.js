import * as types from '../../types/auth';

export default (state = '', action) => {
  switch (action.type) {
    case types.CLEAR_STATE:
      return '';
    case types.SET_PASSWORD:
      return action.password;
    default:
      return state;
  }
};
