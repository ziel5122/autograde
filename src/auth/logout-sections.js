// There are three possible states for our logout process.
// Since we are using JWTs, we just need to remove the token from localStorage.
// These actions are more useful if we're calling the API to log the user out
export LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Logs the user onTouchTap
function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  }
}
