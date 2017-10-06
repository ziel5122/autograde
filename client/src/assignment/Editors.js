import React from 'react';
import { withRouter } from 'react-router-dom';

import Editor from './Editor';

const Editors = ({ parts, match: { params: { index } } }) => {
  console.log(index);
  console.log(parts[index]);
  const { editors } = parts[index];

  return (
    <div style={{ background: 'white', display: 'flex', flex: 1, }}>{
      editors.map(({ name, filename }, index) => (
        <div style={{ flex: 1 }} key={filename}>
          <div>{name}</div>
          <Editor id={filename} />
        </div>
      ))
    }</div>
  )
}

export default withRouter(Editors);
