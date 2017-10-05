import Paper from 'material-ui/Paper';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Assignment from '../assignment/Assignment';
import Sidebar from './Sidebar';
import Tabs from '../assignment/Tabs';

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
    <div style={{ height: '36px' }}> TABS </div>
    <Paper style={paperStyle} zDepth={5}>
      <Sidebar />
      <Route path={`${url}/:name`} component={Assignment} />
      <div style={{ background: 'whitesmoke', height: '100%', width: '200px' }}>
        Actions
      </div>
    </Paper>
  </div>
);

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default connect(mapStateToProps)(Home);
