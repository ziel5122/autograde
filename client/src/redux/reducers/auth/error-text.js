import * as types from '../../types/auth';

export default (state = '', action) => {
  switch (action.type) {
    case types.CLEAR_STATE:
      return '';
    case types.SET_ERROR_TEXT:
      return action.errorText;
    default:
      return state;
  }
};
