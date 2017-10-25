import ContentCreate from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';
import React from 'react';
import { connect } from 'react-redux';

import AssignmentList from './List';
import EditAssignment from './Edit';
import ConfigUpload from './ConfigUpload';

const Assignments = ({
  assignment: { id },
  assignments,
  clearEditAssignment,
  match,
  setEditAssignment
}) => {
  const { params: { assignmentId }, url } = match;

  if (!assignmentId) {
    clearEditAssignment();
    return <AssignmentList url={url} />;
  }

  if (assignmentId !== id) {
    setEditAssignment(assignments[assignmentId], assignmentId);
  }
  return <EditAssignment assignmentId={assignmentId} />;
};

const mapStateToProps = ({ assignments, edit: { assignment } }) => ({
  assignment,
  assignments,
});

const mapDispatchToProps = dispatch => ({
  clearEditAssignment() {
    dispatch({
      type: 'CLEAR_EDIT_ASSIGNMENT',
    });
  },

  setEditAssignment(assignment, assignmentId) {
    dispatch({
      assignment,
      assignmentId,
      type: 'SET_EDIT_ASSIGNMENT',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignments);
