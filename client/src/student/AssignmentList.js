import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { connect } from 'react-redux';

const AssignmentList = ({ assignments }) => (
  <div>
    <Subheader style={{ background: 'white' }}>Assignments</Subheader>
    {
      assignments.filter(({ visible }) => visible)
      .map(({ id, name, dueDate, parts }) => (
        <MenuItem key={id} primaryText={name} />
      ))
    }
  </div>
);

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default connect(mapStateToProps)(AssignmentList);
