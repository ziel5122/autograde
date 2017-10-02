import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Tabs from './Tabs';

const style = {
  width: '100%',
};

const Assignment = ({ assignments, match: { params: { id } } }) => (
  <div style={style}>{
    assignments[id] && assignments[id].parts ?
      <Tabs parts={assignments[id].parts} /> :
      `no parts ${id}`
  }</div>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default connect(mapStateToProps)(Assignment);
