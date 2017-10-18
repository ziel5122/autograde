import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import Editors from './Editors';

const assignmentsStyle = {
  marginBottom: '24px',
  marginLeft: '24px',
  marginRight: '12px',
  marginTop: '24px',
};

const editorsStyle = {
  marginBottom: '24px',
  marginLeft: '12px',
  marginRight: '24px',
  marginTop: '24px',
};

const partsStyle = {
  marginBottom: '24px',
  marginLeft: '12px',
  marginRight: '12px',
  marginTop: '24px',
};

const style = {
  background: 'white',
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

const Edit = ({ assignmentId, assignments, editors, match, parts }) => {
  const { dueDate, name, partIds } = assignments[assignmentId];
  const { url } = match;
  console.log(url);

  return (
    <div style={style}>
      <div style={assignmentsStyle}>
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
      </div>
      <div style={partsStyle}>
        Parts
        {
          partIds.map((partId) => {
            const { attempts, name } = parts[partId];

            return (
              <Link
                key={partId}
                style={{ display: 'block' }}
                to={`${url}/${partId}`}
              >
                {`${name} ${attempts}`}
              </Link>
            );
          })
        }
      </div>
      <div style={editorsStyle}>
        <Route path={`${url}/:partId`} component={Editors} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ assignments, editors, parts }) => ({
  assignments,
  editors,
  parts,
});

export default withRouter(connect(mapStateToProps)(Edit));
