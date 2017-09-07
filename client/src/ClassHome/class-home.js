import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import AssignmentMenu from '../AssignmentMenu';
import Editor from '../Editor';
import styles from './styles';

const ClassHome = ({ assignments, match }) => (
  <div style={styles.classHome}>
    <AssignmentMenu />
    {
      assignments.map(({ dueDate: { day, month, year } }, index) => (
        <Route
          path={`${match.url}/${year}${month}${day}`}
          component={() => <Editor hwNum={index + 1} />}
          key={index}
        />
      ))
    }
  </div>
);

export default withRouter(ClassHome);
