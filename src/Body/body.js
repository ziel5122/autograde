import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import Home from '../Home/home';
import Login from '../Login';
import styles from './styles';

const Body = () => (
  <div style={styles.body}>
    <AuthRoute exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </div>
);

export default Body;
