import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

import AdminRoute from '../containers/AdminRoute';
import AdminHome from '../admin/Home';
import AuthRoute from '../containers/AuthRoute';
import Demo from '../demo/Demo';
import Home from '../home/Home';
import LockedRoute from '../login/LockedRoute';
import Login from '../login/Login';

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  overflow: 'hidden',
  padding: '24px',
};

const Body = ({ admin, loggedIn, match }) => {
  if (match.isExact) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={style}>
      <LockedRoute
        Component={AdminHome}
        lockProp={admin}
        path="/admin"
        to="/login"
      />
      <Route path="/demo" component={Demo} />
      <LockedRoute
        Component={Home}
        lockProp={loggedIn}
        path="/home"
        to="/login"
      />
      <Route path="/login" component={Login} />
      <Route path="*" component={null} />
    </div>
  );
};

const mapStateToProps = ({ login: { admin, loggedIn } }) => ({
  admin,
  loggedIn,
});

export default withRouter(connect(mapStateToProps)(Body));
