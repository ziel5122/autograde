import ContentCreate from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';
import React from 'react';
import { connect } from 'react-redux';

import AssignmentList from './List';
import EditAssignment from './Edit';
import ConfigUpload from './ConfigUpload';

const Assignments = ({ assignments, match, setEditAssignment }) => {
  const { params: { assignmentId }, url } = match;

  if (!assignmentId) {
    return <AssignmentList url={url} />;
  }

  const assignment = assignments[assignmentId];
  setEditAssignment(assignment);
  return <EditAssignment assignmentId={assignmentId} />;
};

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

const mapDispatchToProps = dispatch => ({
  setEditAssignment(assignment) {
    dispatch({
      assignment,
      type: 'SET_EDIT_ASSIGNMENT',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignments);
