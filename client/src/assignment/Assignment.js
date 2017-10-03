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

const Assignment = ({ assignments, match: { params: { name } } }) => (
  <div style={style}>{
    assignments[name] ? (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Tabs parts={assignments[name].parts} />
        <Routes parts={assignments[name].parts} />
      </div>
    ) : null
  }</div>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default connect(mapStateToProps)(Assignment);
