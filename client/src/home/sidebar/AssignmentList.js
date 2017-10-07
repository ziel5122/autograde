import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const AssignmentList = ({ data, match: { url }, openTab, toggleOpen }) => (
  <div>
    <Subheader style={{ background: 'white' }}>Assignments</Subheader>
    {
      data ?
        Object.keys(data).map((name) => ({
          name,
          ...data[name],
        })).filter(({ visible }) => visible)
        .map(({ dueDate, name, parts }) => (
          <Link key={name} to={`/home/${name}`}>
            <MenuItem onClick={toggleOpen} primaryText={name} />
          </Link>
        )) :
        null
    }
  </div>
);

const mapStateToProps = ({ assignments: { data, openTab } }) => ({
  data,
  openTab,
});

export default withRouter(connect(mapStateToProps)(AssignmentList));
