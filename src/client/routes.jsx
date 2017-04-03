import React from 'react';
import { IndexRedirect, Route, hashHistory } from 'react-router';

import AuthService from '../server/utils/AuthService';
import Container from './home/Container';
import Demo from './public/Demo';
import Home from './home/Home';
import Landing from './public/Landing';
import Login from './public/Login';

const auth = new AuthService();

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) replace({ pathname: '/login' });
};

const makeMainRoutes = function makeMainRoutes() {
  return (
    <Route path="/" component={Container} auth={auth}>
      <Route path="demo" component={Demo} />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="landing" component={Landing} />
      <Route path="login" component={Login} />
    </Route>
  );
};

export default makeMainRoutes;
