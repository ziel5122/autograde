import ContentCreate from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';
import React from 'react';
import { connect } from 'react-redux';

import {
  CLEAR_ASSIGNMENT,
  SET_ASSIGNMENT,
} from '../../redux/action-types/assignments';
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
    return <AssignmentList url={url} />;
  }

  return <EditAssignment assignmentId={assignmentId} />;
};

const mapStateToProps = ({
  data: { assignments },
  editAssignment: { assignment },
}) => ({
  assignment,
  assignments,
});

const mapDispatchToProps = dispatch => ({
  clearEditAssignment() {
    dispatch({
      type: CLEAR_ASSIGNMENT,
    });
  },

  setEditAssignment(assignment, assignmentId) {
    dispatch({
      assignment,
      assignmentId,
      type: SET_ASSIGNMENT,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignments);
