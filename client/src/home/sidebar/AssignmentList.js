import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const AssignmentList = ({ assignments, match: { url }, toggleOpen }) => (
  <div>
    <Subheader style={{ background: 'white' }}>Assignments</Subheader>
    {
      assignments ?
        Object.keys(assignments).map((name) => ({
          name,
          ...assignments[name],
        })).filter(({ visible }) => visible)
        .map(({ name, dueDate, parts }) => (
          <Link key={name} to={`${url}/${name}/0`}>
            <MenuItem onClick={toggleOpen} primaryText={name} />
          </Link>
        )) :
        null
    }
  </div>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(AssignmentList));
