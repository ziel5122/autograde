import { combineReducers } from 'redux';

const drawerOpen = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return !state;

    default:
      return state;
  }
};

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return action.loggedIn;

    default:
      return state;
  }
};

export default combineReducers({
  drawerOpen,
  loggedIn,
});
