import ContentCreate from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AssignmentList from './List';
import EditAssignment from './EditAssignment';
import ConfigUpload from './ConfigUpload';

const Assignments = ({ match }) => {
  const { params: { assignmentId }, url } = match;

  if (!assignmentId) {
    return <AssignmentList url={url} />;
  }

  return (
    <EditAssignment assignmentId={assignmentId} />
  );
};

export default Assignments;
