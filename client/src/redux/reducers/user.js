import { combineReducers } from 'redux';

const parts = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STUDENT_PARTS':
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
