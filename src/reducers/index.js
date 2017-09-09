import { combineReducers } from 'redux';

const state = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return action.state;

    default:
      return state;
  }
};

export default combineReducers({
  state,
});
