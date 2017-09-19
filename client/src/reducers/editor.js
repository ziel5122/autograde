import { combineReducers } from 'redux';

const code = (state = '', action) => {
  switch (action.type) {
    case 'SET_CODE':
      return action.code;
    default:
      return state;
  }
};

const darkTheme = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_THEME':
      return !state;
    default:
      return state;
  }
};

const fontSize = (state = 14, action) => {
  switch (action.type) {
    case 'SET_FONT_SIZE':
      return action.fontSize;
    default:
      return state;
  }
};

export default combineReducers({
  code,
  darkTheme,
  fontSize,
});
