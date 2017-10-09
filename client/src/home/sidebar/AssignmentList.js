import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const AssignmentList = ({ data, match: { url }, names, toggleOpen }) => (
  <div>
    <Subheader style={{ background: 'white' }}>Assignments</Subheader>
    {
      data ?
        names.map(name => {
          const assignment = data[name];
          if (assignment.visible) {
            return (
              <Link key={name} to={`/home/${name}`}>
                <MenuItem onClick={toggleOpen} primaryText={name} />
              </Link>
            );
          }
        }) : null
    }
  </div>
);

const mapStateToProps = ({ assignments: { data, names } }) => ({
  data,
  names,
});

export default withRouter(connect(mapStateToProps)(AssignmentList));
