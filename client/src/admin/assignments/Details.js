import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import React from 'react';

const labelStyle = {
  color: 'orangered',
  fontSize: '12px',
};

const style = {
  background: 'white',
  flex: '.3333333',
  marginRight: '12px',
};

const Details = ({
  assignmentId,
  dueDate,
  name,
  visible
}) => (
  <div style={style}>
    <Subheader>Assignment</Subheader>
    <div style={{ marginLeft: '12px', marginRight: '12px' }}>
      <div style={labelStyle}>ID</div>
      {assignmentId}
      <br />
      <br />
      <div style={labelStyle}>Name</div>
      <input defaultValue={name} />
      <br />
      <br />
      <div style={labelStyle}>Due</div>
      <input type="date" defaultValue={dueDate} />
      <br />
      <br />
      <div style={labelStyle}>Visible</div>
      <input type="checkbox" defaultValue={visible} />
    </div>
  </div>
);

export default Details;
