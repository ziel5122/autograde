import { combineReducers } from 'redux';

// Helper Functions
const addAssignment = (state, { attempts, visible, ...rest }) => ({
  ...rest,
  attempts: attempts || 5,
  openTab: 0,
  visible: !!visible,
});

const setOpenTab = (state, openTab) => ({
  ...state,
  openTab,
});

const data = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT':
      const { name, ...rest } = action.assignment;
      return {
        ...state,
        [name]: addAssignment(undefined, rest),
      };
    case 'SET_ASSIGNMENTS':
      return action.assignments.reduce((newState, { name, ...rest, }) => {
        newState[name] = addAssignment(undefined, rest);
        return newState;
      }, {});
    case 'SET_OPEN_TAB':
      return {
        ...state,
        [action.name]: setOpenTab(state[action.name], action.openTab),
      };
    default:
      return state;
  }
}

const names = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ASSIGNMENT':
      return [...state, action.name].sort();
    case 'SET_ASSIGNMENTS':
      return action.assignments.map(assignment => assignment.name).sort();
    default:
      return state;
  }
};

export default combineReducers({
  data,
  names,
});
