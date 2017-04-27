import LoginActionTypes from './LoginActionTypes';
import Dispatcher from '../Dispatcher';

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

const Actions = {

}
