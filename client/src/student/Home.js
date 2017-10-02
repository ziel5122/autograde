import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AssignmentRoutes from './AssignmentRoutes';
import Sidebar from './Sidebar';

const paperStyle = {
  background: 'whitesmoke',
  display: 'flex',
  flex: 1,
  maxWidth: '1000px'
};

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  width: '100%',
};

const Home = ({ assignments }) => (
  <div style={style}>
    <Paper style={paperStyle} zDepth={5}>
      <Sidebar />
      <AssignmentRoutes />
    </Paper>
  </div>
);

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(Home));
