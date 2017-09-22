const loggedIn = (
  state = typeof window !== 'undefined' ? sessionStorage.getItem('jwt') !== null : false,
  action,
) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return action.loggedIn;
    default:
      return state;
  }
};

const loginErrorText = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR_TEXT':
      return action.errorText;
    default:
      return state;
  }
};

const password = (state = '', action) => {
  switch (action.type) {
    case 'SET_PASSWORD':
      return action.password;
    default:
      return state;
  }
};

const username = (state = '', action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
};

export { loggedIn, loginErrorText, password, username };
