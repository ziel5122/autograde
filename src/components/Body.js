import React from 'react';
import { Route } from 'react-router-dom';

import AuthRoute from '../containers/AuthRoute';
import ClassHome from './ClassHome/class-home';
import Login from '../containers/Login';
import styles from './styles';

const bodyStyles = {
  display: 'flex',
  height: '100%',
};

const Body = () => (
  <div style={bodyStyles}>
    <AuthRoute
      Component={() => <ClassHome assignments={assignments334} />}
      exact
      path="/"
    />
    <Route path="/login" component={Login} />
    <Route path="*" component={null} />
  </div>
);

export default Body;
