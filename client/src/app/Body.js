import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

import Admin from '../admin/Admin';
import Demo from '../demo/Demo';
import Home from '../home/Home';
import LockedRoute from '../auth/LockedRoute';
import Login from '../auth/Login';

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  padding: '24px',
};

const Body = ({ admin, loggedIn, match }) => {
  if (match.isExact) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={style}>
      <LockedRoute
        Component={Admin}
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

const mapStateToProps = ({ auth: { admin, loggedIn } }) => ({
  admin,
  loggedIn,
});

export default withRouter(connect(mapStateToProps)(Body));
