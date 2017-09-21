import { combineReducers } from 'redux';

const attempts = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ATTEMPTS':
      return action.attempts;
    default:
      return state;
  }
};

const code = (state = 'jimmy', action) => {
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

const feedback = (state = '', action) => {
  switch (action.type) {
    case 'SET_FEEDBACK':
      return action.feedback;
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
  attempts,
  code,
  darkTheme,
  feedback,
  fontSize,
});
