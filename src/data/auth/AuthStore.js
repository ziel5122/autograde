/* eslint class-methods-use-this: "warn" */
import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';

import AuthActionTypes from './AuthActionTypes';
import Dispatcher from '../Dispatcher';

class AuthStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.Map();
  }

  reduce(state, action) {
    switch (action.type) {
      case AuthActionTypes.LOGIN_USER:
        return state.set({
          isAuthenticated: true,
        });

      case AuthActionTypes.LOGOUT_USER:
        return state.set({
          isAuthenticated: false,
        });

      default:
        return state;
    }
  }
}

export default new AuthStore();
