import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Actions from '../home/Actions';
import Editor from './Editor';
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

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const subStyle = {
  background: 'white',
  flex: 1,
  overflow: 'auto',
};

const Assignment = ({
  assignments,
  editors,
  match: { params: { assignmentId }, url },
  parts,
}) => {
  const partId = assignments[assignmentId].openTab;
  const editorIds = parts[partId].editorIds;
  const editorObjs = editorIds.map(editorId => editors[editorId]);
  console.log(editorObjs);

  return (
    <div style={style}>
      <div style={assignmentStyle}>
        <div style={subStyle}>{
          editorObjs.map(({ code, filename, title }, index) => (
            <div key={filename} style={wrapperStyle}>
              { title ? <Subheader>{filename}</Subheader> : null }
              <Editor code={code} id={filename} />
            </div>
          ))
        }</div>
        <Actions />
      </div>
    </div>
  );
};

const mapStateToProps = ({ assignments, editors, parts }) => ({
  assignments,
  editors,
  parts,
});

export default connect(mapStateToProps)(Assignment);
