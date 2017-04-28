import { Container } from 'flux/utils';

import App from '../app/App';
import AuthActions from '../data/auth/AuthActions';
import AuthStore from '../data/auth/AuthStore';

function getStores() {
  return [
    AuthStore,
  ];
}

function getState() {
  return {
    isAuthenticated: AuthStore.getState(),

    onLogin: AuthActions.loginUser,
    onLogout: AuthActions.logoutUser,
  };
}

export default Container.createFunctional(App, getStores, getState);
