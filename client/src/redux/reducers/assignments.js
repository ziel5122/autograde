import { combineReducers } from 'redux';

const compare = (a, b) => {
  if (a.dueDate < b.dueDate) return -1;
  if (a.dueDate > b.dueDate) return 1;
  return 0;
};

const assignments = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT':
      const temp = [...state, action.assignment];
      return temp.sort(compare);
    case 'SET_ASSIGNMENTS':
      return action.assignments.reduce((newState, { name, ...rest }) => {
        newState[name] = rest;
        return newState;
      }, {});
    default:
      return state;
  }
}

export default assignments;
