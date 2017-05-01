import throttle from 'lodash/throttle';
import { createStore } from 'redux';

import authentication from './store';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(authentication, persistedState);

  store.subscribe(throttle(() => {
    saveState({
      username: store.getState().username,
      isAuthenticated: store.getState().isAuthenticated,
    });
  }, 1000));

  return store;
};

export default configureStore;
