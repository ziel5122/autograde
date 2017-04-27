/* eslint-env browser */
import fetch from 'isomorphic-fetch';

// There are three possible states for our login process
// and we need actions for each of them
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

function loginError(message) {
  return {
    message,
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
  };
}

function receiveLogin(user) {
  return {
    id_token: user.id_token,
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
  };
}

function requestLogin(creds) {
  return {
    creds,
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
  };
}

// Call the API to get a token and dispatched actions along the way
export function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`,
  };

  return (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));

    return fetch('http://localhost:3001/sessions/create', config)
      .then(response => (response.json()))
      .then(user => console.log(user));
      /*
      .then(user => (
        {
          user,
          response,
        }
      )
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message));
          return Promise.reject(user);
        }
        // If login was successful, set the token in local storage
        localStorage.setItem('id_token', user.id_token);
        // Dispatch the success action
        return dispatch(receiveLogin(user));
      }).catch(err => console.error(err));
      */
  };
}
