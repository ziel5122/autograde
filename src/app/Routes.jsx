import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Demo from '../public/Demo';
import DMHome from '../cst463/DMHome';
import Home from '../home/Home';
import Login from '../public/Login';
import OSHome from '../cst334/OSHome';

const loggedIn = false;

const redirect = path => (<Redirect to={path} />);

const requireAuth = component => (loggedIn ? component : redirect('/login'));

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => (requireAuth(<Home />))} />
      <Route path="/cst334" render={() => (requireAuth(<OSHome />))} />
      <Route path="/cst463" render={() => (requireAuth(<DMHome />))} />
      <Route path="/demo" component={Demo} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
