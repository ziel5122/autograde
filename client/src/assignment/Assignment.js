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
  overflow: 'hidden'
};

const style = {
  background: 'white',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
};

const Assignment = ({ data, match: { params: { name }, url } }) => (
  <div style={style}>{
    data[name] ? (
      <div style={assignmentStyle}>
        <Editors parts={data[name].parts} />
        <Actions />
      </div>
    ) : null
  }</div>
);

const mapStateToProps = ({ assignments: { data } }) => ({
  data,
});

export default connect(mapStateToProps)(Assignment);
