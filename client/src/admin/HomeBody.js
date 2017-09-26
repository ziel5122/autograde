import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Assignments from './Assignments';
import Grades from './Grades';
import Users from './Users';

const style = {
  height: '100%',
  width: '100%',
};

const HomeBody = ({ match: { url } }) => (
  <div style={style}>
    <Route path={`${url}/assignments`} component={Assignments} />
    <Route path={`${url}/grades`} component={Grades} />
    <Route path={`${url}/users`} component={Users} />
  </div>
);

export default withRouter(HomeBody);
