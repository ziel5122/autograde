import Paper from 'material-ui/Paper';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Actions from '../home/Actions';
import Editors from './Editors';
import Tabs from '../home/Tabs';

const assignmentStyle = {
  display: 'flex',
  flex: 1,
};

const style = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
};

const Assignment = ({ assignments, match: { params: { name }, url } }) => (
  <div style={style}>{
    assignments[name] ? (
      <div style={assignmentStyle}>
        <Route component={() => <Editors parts={assignments[name].parts} />} path={`${url}/:index`} />
        <Actions />
      </div>
    ) : null
  }</div>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default connect(mapStateToProps)(Assignment);
