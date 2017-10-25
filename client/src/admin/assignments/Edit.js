import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import AssignmentDetails from './Details';
import EditEditors from './editors/Edit';
import EditParts from './parts/Edit';

const style = {
  background: 'whitesmoke',
  display: 'flex',
  flex: 1,
};

const childStyle = {
  background: 'white',
  flex: '.3333333',
  marginBottom: '24px',
  marginTop: '24px',
};

const leftChildStyle = {
  ...childStyle,
  marginLeft: '24px',
  marginRight: '12px',
};

const middleChildStyle = {
  ...childStyle,
  marginLeft: '12px',
  marginRight: '12px',
};

const rightChildStyle = {
  ...childStyle,
  marginLeft: '12px',
  marginRight: '24px',
};

class EditAssignment extends PureComponent {
  constructor(props) {
    super(props);
    const { assignments, parts, setEditAssignment, setEditParts } = this.props;
    const { assignmentId } = this.props.match.params;
    const { partIds } = assignments[assignmentId];
    const editParts = partIds.reduce((newParts, partId) => {
      newParts[partId] = parts[partId];
      return newParts;
    }, {});
    setEditAssignment(assignments[assignmentId]);
    setEditParts(editParts);
    this.updateDueDate = this.updateDueDate.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateVisible = this.updateVisible.bind(this);
  }

  updateDueDate({ target: { value } }) {
    this.props.setEditDueDate(value);
  }

  updateName({ target: { value } }) {
    this.props.setEditName(value);
  }

  updateVisible({ target: { value } }) {
    this.props.setEditVisible(value);
  }

  render() {
    const { assignment, match: { params: { assignmentId }, url } } = this.props;
    const { dueDate, name, visible } = assignment;

    return (
      <div style={style}>
        <div style={leftChildStyle}>
          <Subheader>Assignment</Subheader>
          <AssignmentDetails
            assignmentId={assignmentId}
            dueDate={dueDate}
            name={name}
            updateDueDate={this.updateDueDate}
            updateName={this.updateName}
            updateVisible={this.updateVisible}
            visible={visible}
          />
        </div>
        <div style={middleChildStyle}>
          <Subheader>Parts</Subheader>
        </div>
        <div style={rightChildStyle}>
          <Subheader>Editors</Subheader>
        </div>
        {/* <EditParts />
        <Route path={`${url}/:partId`} component={EditEditors} /> */}
      </div>
    );
  }
}

const mapStateToProps = ({
  assignments,
  edit: { assignment },
  parts
}) => ({
  assignment,
  assignments,
  parts,
});

const mapDispatchToProps = dispatch => ({
  setEditAssignment(assignment) {
    dispatch({
      assignment,
      type: 'SET_EDIT_ASSIGNMENT',
    });
  },

  setEditDueDate(dueDate) {
    dispatch({
      dueDate,
      type: 'SET_EDIT_DUE_DATE',
    });
  },

  setEditName(name) {
    dispatch({
      name,
      type: 'SET_EDIT_NAME',
    })
  },

  setEditParts(parts) {
    dispatch({
      parts,
      type: 'SET_EDIT_PARTS',
    });
  },

  setEditVisible(visible) {
    dispatch({
      visible,
      type: 'SET_EDIT_VISIBLE',
    });
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditAssignment)
);
