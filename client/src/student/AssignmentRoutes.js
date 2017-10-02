import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, withRouter } from 'react-router-dom';

import Assignment from '../assignment/Assignment';
import Demo from '../demo/Demo';

const style = {
  width: '100%',
};

const AssignmentRoutes = ({ assignments: { assignments }, match: { url } }) => (
  <div style={style}>{
    assignments.map(({ id, parts }) => (
      <Route key={id} path={`${url}/${id}`} component={() => <Assignment parts={parts} />} />
    ))
  }</div>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(AssignmentRoutes));
