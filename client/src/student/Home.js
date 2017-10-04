import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Assignment from '../assignment/Assignment';
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

const Home = ({ assignments, match: { url } }) => (
  <div style={style}>
    <Paper style={paperStyle} zDepth={5}>
      <Sidebar />
      <Route path={`${url}/:name`} component={Assignment} />
    </Paper>
  </div>
);

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default connect(mapStateToProps)(Home);
