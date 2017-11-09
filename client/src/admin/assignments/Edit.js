import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import {
  CLEAR_ASSIGNMENT,
  SET_ASSIGNMENT,
} from '../../redux/types/assignments';
import { setAssignment, setParts } from '../../redux/actions/edit-assignment';
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
    const { assignment, match } = props;
    const { assignmentId } = match.params;
    if (assignmentId !== assignment.assignmentId) {
      const { assignments, dispatch, editors, parts } = props;
      const editAssignment = assignments[assignmentId];
      const { partIds } = editAssignment;
      const editParts = partIds.reduce((newParts, partId) => {
        newParts[partId] = parts[partId];
        return newParts;
      }, {});
      const editEditors = Object.keys(editParts).reduce((editEditors, editPartId) => {
        const editPart = editParts[editPartId];
        const editPartTemp = editPart.editorIds.reduce((moreEditors, editorId) => {
          moreEditors[editorId] = editors[editorId];
          return moreEditors;
        }, {});
        return {
          ...editEditors,
          ...editPartTemp,
        };
      });
      console.log(editAssignment);
      console.log(editParts);
      console.log(editEditors);
      dispatch(setAssignment(assignmentId, editAssignment));
      dispatch(setParts(editParts));
      dispatch(setEditors(editEditors));
    }
    this.updateName = this.updateName.bind(this);
    this.updateVisible = this.updateVisible.bind(this);
  }

  componentWillUnmount() {
    this.props.clearEditAssignment();
  }

  updateDueDate = ({ target: { value } }) => {
    this.props.setEditDueDate(value);
  };

  updateName = ({ target: { value } }) => {
    this.pros.setEditName(value);
  };

  updateVisible = ({ target: { value } }) => {
    this.props.setEditVisible(value);
  };

  render() {
    const { assignment, match: { params: { assignmentId }, url } } = this.props;
    const { dueDate, name, visible } = assignment;

    console.log(this.props);

    return (
      <div style={style}>
        <div style={leftChildStyle}>
          <Subheader>Assignment</Subheader>
          <AssignmentDetails
            assignmentId={assignmentId}
            updateDueDate={this.updateDueDate}
            updateName={this.updateName}
            updateVisible={this.updateVisible}
          />
        </div>
        <div style={middleChildStyle}>
          <Subheader>Parts</Subheader>
          <EditParts />
        </div>
        <div style={rightChildStyle}>
          <Subheader>Editors</Subheader>
          <Route path={`${url}/:partId`} component={EditEditors} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  data: { assignments, editors, parts },
  editAssignment: { assignment },
}) => ({
  assignment,
  assignments,
  editors,
  parts,
});

const mapDispatchToProps = dispatch => ({
  clearEditAssignment() {
    dispatch({
      type: 'CLEAR_EDIT_ASSIGNMENT',
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

  setEditVisible(visible) {
    dispatch({
      visible,
      type: 'SET_EDIT_VISIBLE',
    });
  },
});

export default withRouter(connect(mapStateToProps)(EditAssignment));
