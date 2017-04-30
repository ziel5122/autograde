/* eslint-env browser */
import React from 'react';
import { Route, Switch } from 'react-router';

import AuthRoute from './AuthRoute';
import Demo from '../public/Demo';
import DMHome from '../cst463/DMHome';
import Home from '../home/Home';
import Login from '../public/Login';
import OSHome from '../cst334/OSHome';

const Routes = () => {
  console.log('Routes render');
  return (
    <Switch className="switch">
      <AuthRoute
        exact path="/"
        component={Home}
      />
      <AuthRoute
        exact path="/cst334"
        component={OSHome}
      />
      <AuthRoute
        exact path="/cst463"
        component={DMHome}
      />
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
