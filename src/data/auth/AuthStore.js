/* eslint class-methods-use-this: "warn" */
/* esling consistent-return: "warn" */
/* eslint-env browser */
import { ReduceStore } from 'flux/utils';
// import Immutable from 'immutable';

import AuthActionTypes from './AuthActionTypes';
import Dispatcher from '../Dispatcher';

class AuthStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    const jwt = sessionStorage.getItem('id_token');
    return !!jwt;
  }

  reduce(state, action) {
    switch (action.type) {
      case AuthActionTypes.LOGIN_USER:
        fetch('http://localhost:3000/api/login', {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            username: action.creds.usernmae,
            password: action.creds.password,
          }),
        }).then((token) => {
          if (token) return state.set(true);
          return state.set(false);
        }).catch(err => console.error(err));
        return;

      case AuthActionTypes.LOGOUT_USER:
        localStorage.removeItem('id_token');
        return state.set(false);

      default:
        return state;
    }
  }
}

export default new AuthStore();
