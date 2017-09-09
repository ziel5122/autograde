import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import AuthRoute from '../containers/AuthRoute';
import ClassHome from '../containers/ClassHome';
import Login from '../containers/Login';

const bodyStyles = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'flex',
};

const Body = () => (
  <div style={bodyStyles}>
    <AuthRoute
      Component={() => <ClassHome />}
      exact
      path="/"
    />
    <Route path="/login" component={Login} />
    <Route path="*" component={null} />
  </div>
);

export default withRouter(Body);
