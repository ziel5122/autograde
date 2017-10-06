import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

import AdminRoute from '../containers/AdminRoute';
import AdminHome from '../admin/Home';
import AuthRoute from '../containers/AuthRoute';
import Demo from '../demo/Demo';
import Home from '../home/Home';
import Login from '../containers/Login';

const style = {
  flex: 1,
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
