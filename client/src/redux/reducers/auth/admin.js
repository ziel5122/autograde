import * as types from '../../types/auth';

export default (state = false, action) => {
  switch (action.type) {
    case types.SET_ADMIN:
      return action.admin;
    default:
      return state;
  }
};
