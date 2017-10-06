import React from 'react';
import { withRouter } from 'react-router-dom';

import Editor from './Editor';

const Editors = ({ parts, match: { params: { index } } }) => {
  console.log(index);
  const { editors } = parts[index];

  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', height: '50vh', overflow: 'hidden' }}>{
      editors.map(({ name, filename }, index) => (
        <div key={filename} style={{ display: 'flex' }}>
          <div>{name}</div>
          <Editor id={filename} />
        </div>
      ))
    }</div>
  );
}

export default withRouter(Editors);
