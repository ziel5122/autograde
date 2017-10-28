import React from 'react';

import AssignmentList from './List';
import EditAssignment from './Edit';

const Assignments = ({ match: { params: { assignmentId }, url } }) => (
  assignmentId ?
    <EditAssignment assignmentId={assignmentId} /> :
    <AssignmentList url={url} />
);

export default Assignments;
