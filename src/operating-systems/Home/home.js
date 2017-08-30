import Paper from 'material-ui/Paper';
import React from 'react';
import { Route } from 'react-router-dom';

import AssignmentMenu from '../../AssignmentMenu';
import Editor from '../../Editor';
import Menu from '../Menu/menu';

const OSHome = ({ match, openAssignment }) => (
  <div style={{ height: '100%', display: 'flex', width: '100%' }}>
    <AssignmentMenu match={match} />
    <Paper style={{ display: 'inline-block' }}>
      <Route path={`${match.url}/20170801`} component={Editor} />
      <Route path={`${match.url}/20170904`} component={Editor} />
      <Route path={`${match.url}/20170911`} component={Editor} />
      <Route path={`${match.url}/20170918`} component={Editor} />
    </Paper>
  </div>
);

export default OSHome;
