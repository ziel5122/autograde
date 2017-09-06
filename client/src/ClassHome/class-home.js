import Paper from 'material-ui/Paper';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import AssignmentMenu from '../AssignmentMenu';
import Editor from '../Editor';
import styles from './styles';

const ClassHome = ({ assignments, match }) => (
  <div style={styles.classHome}>
    <AssignmentMenu match={match} />
    {
      assignments.map(({ dueDate: { day, month, year } }, index) => (
        <Route
          path={`/cst334/${year}${month}${day}`}
          component={() => <Editor hwNum={index+1} />}
          key={index}
        />
      ))
    }
  </div>
);

export default ClassHome;