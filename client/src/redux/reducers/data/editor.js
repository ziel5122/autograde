import { SET_CODE } from '../../types/data';

export default (state, action) => {
  switch (action.type) {
    case SET_CODE:
      return {
        ...state,
        code: action.code,
      };
    default:
      return state;
  }
};
