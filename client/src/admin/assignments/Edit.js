import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { connect } from 'react-redux';

const style = {
  background: 'white',
  margin: '24px',
  padding: '24px',
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

const Edit = ({ assignmentId, assignments, editors, parts }) => {
  const { name, dueDate } = assignments[assignmentId];
  console.log(dueDate);

  return (
    <div style={style}>
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
        />
      </div>
      Parts
    </div>
  );
};

const mapStateToProps = ({ assignments, editors, parts }) => ({
  assignments,
  editors,
  parts,
});

export default connect(mapStateToProps)(Edit);
