/* eslint class-methods-use-this: "warn" */
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
      case AuthActionTypes.LOGIN_USER: {
        const { username, password } = action.creds;
        const body = JSON.stringify({
          username,
          password,
        });

        const headers = {
          'content-type': 'application/json',
        };

        const method = 'post';

        fetch('http://localhost:3000/api/login', {
          method,
          headers,
          body,
        }).then((status, content) => {
          console.log(status);
          console.log(content);
        }).catch(err => console.error(err));

        return true;
      }

      case AuthActionTypes.LOGOUT_USER:
        localStorage.removeItem('id_token');
        return false;

      default:
        return state;
    }
  }
}

export default new AuthStore();
