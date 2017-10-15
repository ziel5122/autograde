import React from 'react';
import { Route } from 'react-router-dom';

import Assignment from '../assignment/Assignment';
import Sidebar from './Sidebar';
import Tabs from './Tabs';

const paperStyle = {
  background: 'whitesmoke',
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
};

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxWidth: '1000px',
  overflow: 'hidden',
  width: '100%',
};

const tabsWrapperStyle = {
  height: '36px',
  width: '100%',
};

const Home = ({ match: { url } }) => (
  <div style={style}>
    <div style={tabsWrapperStyle}>
      <Route path={`${url}/:assignmentId`} component={Tabs} />
    </div>
    <div style={paperStyle}>
      <Route path={`${url}/:name?`} component={Sidebar} />
      <Route path={`${url}/:assignmentId`} component={Assignment} />
    </div>
  </div>
);

export default Home;
