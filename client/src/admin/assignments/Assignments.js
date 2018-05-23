import React from 'react';

import AssignmentList from './List';
import EditAssignment from './Edit';

const Assignments = ({ match: { params: { assignmentId }, url } }) => {
  console.log('bleh');

  return (
    assignmentId ?
      <EditAssignment assignmentId={assignmentId} ass="ass" /> :
      <AssignmentList url={url} />
  );
};

export default Assignments;
