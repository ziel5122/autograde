import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

import Assignments from './assignments/Assignments';
import Grades from './Grades';
import Users from './Users';

const style = {
  background: 'whitesmoke',
  height: '100%',
  width: '100%',
};

const HomeBody = ({ match }) => {
  const { url } = match;

  if (match.isExact) {
    //return <Redirect to={`${url}/assignments`} />;
  }

  return (
    <div style={style}>
      <Route path={`${url}/assignments/:assignmentId?`} component={Assignments} />
      <Route path={`${url}/grades`} component={Grades} />
      <Route path={`${url}/users`} component={Users} />
    </div>
  );
};

export default withRouter(HomeBody);
