import React from 'react';

import Tabs from './Tabs';

const style = {
  width: '100%',
};

const Assignment = ({ parts }) => (
  <div style={style}>{
    parts ? <Tabs parts={parts} /> : null
  }</div>
);

export default Assignment;
