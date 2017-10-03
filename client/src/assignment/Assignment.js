import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Editor from '../assignment/Editor';
import Routes from './Routes';
import Tabs from './Tabs';

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const Assignment = ({ assignments, match: { params: { id } } }) => (
  <div style={style}>{
    assignments[id] ? (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Tabs parts={assignments[id].parts} />
        <Routes parts={assignments[id].parts} />
      </div>
    ) : null
  }</div>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default connect(mapStateToProps)(Assignment);
