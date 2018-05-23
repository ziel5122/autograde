import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { connect } from 'react-redux';

const labelStyle = {
  color: 'orangered',
  fontSize: '12px',
};

const style = {
  marginLeft: '12px',
  marginRight: '12px',
};

const Details = ({
  assignmentId,
  dueDate,
  name,
  updateDueDate,
  updateName,
  updateVisible,
  visible
}) => (
  <div style={style}>
    <div style={labelStyle}>ID</div>
    {assignmentId}
    <br />
    <br />
    <div style={labelStyle}>Name</div>
    <input defaultValue={name} onChange={updateName} />
    <br />
    <br />
    <div style={labelStyle}>Due</div>
    <input type="date" defaultValue={dueDate} onChange={updateDueDate} />
    <br />
    <br />
    <div style={labelStyle}>Visible</div>
    <input type="checkbox" defaultValue={visible} onChange={updateVisible} />
  </div>
);

const mapStateToProps = ({ editAssignment: { assignment } }) => {
  const { name, dueDate, visible } = assignment;

  return {
    dueDate,
    name,
    visible,
  };
};

export default connect(mapStateToProps)(Details);
