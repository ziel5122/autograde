import React from 'react';
import { connect } from 'react-redux';

import AssignmentMenu from './assignment-menu';

const mapStateToProps = ({ assignmentMenuOpen, assignmentOpen }) => ({
  assignmentMenuOpen,
  assignmentOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleAssignmentMenu() {
    dispatch({
      type: 'TOGGLE_ASSIGNMENT_MENU',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentMenu);
