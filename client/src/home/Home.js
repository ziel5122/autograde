import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Actions from './Actions';
import Assignment from '../assignment/Assignment';
import Sidebar from './Sidebar';
import Tabs from './Tabs';

const paperStyle = {
  background: 'whitesmoke',
  display: 'flex',
  flex: 1,
  width: '100%',
};

const style = {
  alignItems: 'flex-end',
  background: 'lightgray',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  maxWidth: '1000px',
  width: '100%',
};

const Home = ({ assignments, match: { url } }) => (
  <div style={style}>
    <Route path={`${url}/:name`} component={Tabs} />
    <Paper style={paperStyle} zDepth={5}>
      <Sidebar />
      <Route path={`${url}/:name`} component={Assignment} />
      <Actions />
    </Paper>
  </div>
);

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default connect(mapStateToProps)(Home);
