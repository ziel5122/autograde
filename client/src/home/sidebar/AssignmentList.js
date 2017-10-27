import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
};

const AssignmentList = ({
  assignmentIds,
  assignments,
  toggleOpen,
}) => (
  <div>
    <Subheader style={{ background: 'white' }}>Assignments</Subheader>
    {
      assignmentIds.map((assignmentId) => {
        const { name, visible } = assignments[assignmentId];
        return visible ? (
          <Link
            key={assignmentId}
            style={linkStyle}
            to={`/home/${assignmentId}`}
          >
            <MenuItem onClick={toggleOpen} primaryText={name} />
          </Link>
        ) : null;
      })
    }
  </div>
);

const mapStateToProps = ({ data: { assignmentIds, assignments } }) => ({
  assignmentIds,
  assignments,
});

export default withRouter(connect(mapStateToProps)(AssignmentList));
