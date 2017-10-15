import { combineReducers } from 'redux';

const parts = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_USER_PART':
      return {
        ...state,
        [action.partId]: action.part,
      }
    case 'SET_USER_PARTS':
      return action.studentParts;
    case 'SET_ATTEMPTS':
      const { partId } = action;
      return {
        ...state,
        [partId]: setAttempts(state[partId], action.attempts),
      };
    default:
      return state;
  }
};

export default combineReducers({
  parts,
});
