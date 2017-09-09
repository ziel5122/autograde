import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AssignmentMenu from './assignment-menu';

const mapStateToProps = ({ assignmentMenuOpen, assignmentOpen }) => ({
  assignmentMenuOpen,
  assignmentOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleAssignmentMenu() {
    dispatch({
      type: 'TOGGLE_ASSIGNMENT_MENU',
    });
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AssignmentMenu),
);
