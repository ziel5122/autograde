import { combineReducers } from 'redux';

const assignmentMenuOpen = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_ASSIGNMENT_MENU':
      return !state;

    default:
      return state;
  }
};

const assignmentOpen = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_ASSIGNMENT':
      return true;

    default:
      return state;
  }
};

const drawerOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return !state;

    default:
      return state;
  }
};

const loggedIn = (
  state = sessionStorage.getItem('jwt') !== null,
  action,
) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return action.loggedIn;

    default:
      return state;
  }
};

export default combineReducers({
  assignmentMenuOpen,
  assignmentOpen,
  drawerOpen,
  loggedIn,
});
