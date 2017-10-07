import Subheader from 'material-ui/Subheader';
import React from 'react';
import { withRouter } from 'react-router-dom';

import Editor from './Editor';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const style = {
  background: 'white',
  flex: 1,
  overflow: 'auto',
};

const Editors = ({ parts, openTab }) => {
  const { editors } = parts[0];

  return (
    <div style={style}>{
      editors.map(({ name, filename }, index) => (
        <div key={filename} style={wrapperStyle}>
          <Subheader>{name}</Subheader>
          <Editor id={filename} />
        </div>
      ))
    }</div>
  );
}

const mapStateToProps = ({ assignments: { openTab } }) => ({
  openTab,
});

export default withRouter(Editors);
