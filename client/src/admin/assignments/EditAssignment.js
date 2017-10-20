import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import EditEditors from './EditEditors';
import EditParts from './EditParts';

const assignmentsStyle = {
  background: 'white',
  flex: '.3333333',
  marginRight: '12px',
};

const style = {
  background: 'whitesmoke',
  display: 'flex',
  flex: 1,
  margin: '24px',
};

const textFieldStyles = {
  display: 'block',
};

const textFieldProps = {
  floatingLabelFocusStyle: { color: 'orangered' },
  floatingLabelShrinkStyle: { color: 'orangered' },
  floatingLabelStyle: { color: 'darkgray' },
  style: textFieldStyles,
  underlineFocusStyle: { borderColor: 'orangered' },
  underlineStyle: { borderColor: 'white' },
};

const EditAssignment = ({
  assignmentId,
  assignments,
  editors,
  match,
  parts,
  setAdminPartIds,
  setAdminParts,
}) => {
  const { dueDate, name, partIds, visible } = assignments[assignmentId];
  const { url } = match;

  setAdminPartIds(partIds);
  const adminParts = partIds.reduce((newParts, partId) => {
    newParts[partId] = parts[partId];
    return newParts;
  }, {});
  setAdminParts(adminParts);

  return (
    <div style={style}>
      <div style={assignmentsStyle}>
        <Subheader>Assignment</Subheader>
        <div style={{ marginLeft: '12px', marginRight: '12px' }}>
          {assignmentId}
          <TextField
            defaultValue={name}
            floatingLabelText="name"
            id="editName"
            {...textFieldProps}
          />
          <DatePicker
            defaultDate={new Date(dueDate)}
            floatingLabelText="due date"
            id="editDueDate"
            onChange={(event, date) => console.log(date)}
            {...textFieldProps}
          />
          <div style={{ color: 'orangered', fontSize: '12px' }}>
            visible
            <Toggle
              style={{ display: 'inline-block' }}
              defaultToggled={visible}
            />
          </div>
        </div>
      </div>
      <EditParts />
      <Route path={`${url}/:partId`} component={EditEditors} />
    </div>
  );
};

const mapStateToProps = ({ assignments, editors, parts }) => ({
  assignments,
  editors,
  parts,
});

const mapDispatchToProps = dispatch => ({
  setAdminPartIds(partIds) {
    dispatch({
      partIds,
      type: 'SET_ADMIN_PART_IDS',
    });
  },

  setAdminParts(parts) {
    dispatch({
      parts,
      type: 'SET_ADMIN_PARTS',
    });
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditAssignment)
);
