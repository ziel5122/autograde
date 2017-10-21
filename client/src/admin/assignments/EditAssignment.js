import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import AssignmentDetails from './AssignmentDetails';
import EditEditors from './EditEditors';
import EditParts from './EditParts';

const style = {
  background: 'whitesmoke',
  display: 'flex',
  flex: 1,
  margin: '24px',
};

const EditAssignment = ({
  assignment,
  assignmentId,
  editors,
  match,
  parts,
  setEditParts,
}) => {
  console.log(assignment);
  const { dueDate, name, partIds, visible } = assignment;
  const { url } = match;

  const editParts = partIds.reduce((newParts, partId) => {
    newParts[partId] = parts[partId];
    return newParts;
  }, {});
  setEditParts(editParts);

  return (
    <div style={style}>
      <AssignmentDetails
        assignmentId={assignmentId}
        dueDate={dueDate}
        name={name}
        visible={visible}
      />
      <EditParts />
      {/* <Route path={`${url}/:partId`} component={EditEditors} /> */}
    </div>
  );
};

const mapStateToProps = ({
  edit: { assignment },
  assignments,
  editors,
  parts
}) => ({
  assignment,
  assignments,
  editors,
  parts,
});

const mapDispatchToProps = dispatch => ({
  setEditParts(parts) {
    dispatch({
      parts,
      type: 'SET_EDIT_PARTS',
    });
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditAssignment)
);
