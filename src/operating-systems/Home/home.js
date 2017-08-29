import Paper from 'material-ui/Paper';
import React from 'react';
import { Route } from 'react-router-dom';

import AssignmentMenu from '../../AssignmentMenu';
import Menu from '../Menu/menu';

const OSHome = ({ match }) => (
  <div style={{ height: '100%', width: '100%' }}>
    <Paper style={{ display: 'inline-block', height: '100%' }}>
      <AssignmentMenu match={match} />
    </Paper>
    <Paper>
      <Route path={`${match.url}/20170828`} />
      <Route path={`${match.url}/20170904`} />
      <Route path={`${match.url}/20170911`} />
      <Route path={`${match.url}/20170918`} />
    </Paper>
  </div>
);

export default OSHome;
