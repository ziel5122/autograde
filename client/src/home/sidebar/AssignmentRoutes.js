import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, withRouter } from 'react-router-dom';

import Assignment from '../assignment/Assignment';
import Demo from '../demo/Demo';

const style = {
  width: '100%',
};

const AssignmentRoutes = ({ data }) => (
  <div style={style}>{
    data.map(({ name, parts }) => (
      <Route key={name} path={`/${name}`} component={() => <Assignment parts={parts} />} />
    ))
  }</div>
);

const mapStateToProps = ({ assignments: { data } }) => ({
  data,
});

export default withRouter(connect(mapStateToProps)(AssignmentRoutes));
