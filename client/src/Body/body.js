import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import DMHome from '../data-mining/Home/home.js';
import Home from '../Home/home';
import Login from '../Login';
import OSHome from '../operating-systems/Home';
import styles from './styles';

const Body = () => (
  <div style={styles.body}>
    <AuthRoute exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/cst334" component={OSHome} />
    <Route path="/cst463" component={DMHome} />
  </div>
);

export default Body;
