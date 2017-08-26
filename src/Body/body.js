import React from 'react';
import { Route, Router } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import Home from '../Home/home';
import Login from '../Login/login';
import styles from './styles';

const Body = () => (
  <div style={styles.body}>
    <Route path="/login" component={Login} />
  </div>
);

export default Body;
