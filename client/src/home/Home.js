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
};

const style = {
  alignItems: 'flex-start',
  background: 'lightgray',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  maxWidth: '1000px',
  width: '100%',
};

const Home = ({ match: { url } }) => (
  <div style={style}>
    <div style={{ height: '36px', width: '100%' }}>
      <Route path={`${url}/:name`} component={Tabs} />
    </div>
    <Paper style={paperStyle} zDepth={5}>
      <Sidebar />
      <Route path={`${url}/:name`} component={Assignment} />
    </Paper>
  </div>
);

export default Home;
