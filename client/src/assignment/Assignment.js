import Paper from 'material-ui/Paper';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Actions from '../home/Actions';
import Editor from '../assignment/Editor';
import Routes from './Routes';
import Tabs from '../home/Tabs';

const assignmentStyle = {
  display: 'flex',
  flex: 1,
};

const style = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const Assignment = ({ assignments, match: { params: { name } } }) => (
  <div style={style}>
    nothing
    {
      assignments[name] ? (
        <div style={assignmentStyle}>
          <Routes parts={assignments[name].parts} />
          <Actions />
        </div>
      ) : null
    }
  </div>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default connect(mapStateToProps)(Assignment);
