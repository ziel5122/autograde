import { combineReducers } from 'redux';

const assignments = (state = [], action) => {
  switch (action.type) {
    case 'SET_ASSIGNMENTS':
      return action.assignments;
    default:
      return state;
  }
}

export default combineReducers({
  assignments,
});
