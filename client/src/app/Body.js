import jwt from 'jsonwebtoken';
import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

import AdminRoute from '../containers/AdminRoute';
import AdminHome from '../admin/Home';
import AuthRoute from '../containers/AuthRoute';
import Assignment from '../assignment/Assignment';
import Demo from '../demo/Demo';
import Home from '../home/Home';
import Login from '../containers/Login';

const bodyStyles = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '24px',
};

const style = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '24px',
};

const Body = ({ match }) => {
  if (match.isExact) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={style}>
      <AdminRoute path="/admin" Component={AdminHome} />
      <Route path="/demo" component={Demo} />
      <AuthRoute path="/home" Component={Home} />
      <Route path="/login" component={Login} />
      <Route path="*" component={null} />
    </div>
  );
}

export default withRouter(Body);
