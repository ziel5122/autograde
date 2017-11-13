import { createStore } from 'redux';

import {
  clearState,
  setAdmin,
  setErrorText,
  setLoggedIn,
  setPassword,
  setUsername, 
} from '../../actions/auth';
import emptyState from '../../utils/emptyState';
import reducers from '..';

describe('tests for auth->admin reducer', () => {
  it('should set admin status', () => {
      const store = createStore(reducers);
      const initialState = store.getState();
      const admin = true;
      const finalState = {
        ...emptyState,
        auth: {
          ...emptyState.auth,
          admin,
        },
      };

      store.dispatch(setAdmin(admin));
      const state = store.getState();

      expect(initialState).toEqual(emptyState);
      expect(state).toEqual(finalState);
  });
});

describe('test for auth->errorText reducer', () => {
  it('should set error text', () => {
    const store = createStore(reducers);
    const initialState = store.getState();
    const errorText = 'there was an error';
    const finalState = {
      ...emptyState,
      auth: {
        ...emptyState.auth,
        errorText,
      },
    };

    store.dispatch(setErrorText(errorText));
    const state = store.getState();

    expect(initialState).toEqual(emptyState);
    expect(state).toEqual(finalState);
    expect(initialState).not.toEqual(finalState);
  });
});
