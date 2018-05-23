import Subheader from 'material-ui/Subheader';
import React from 'react';
import { connect } from 'react-redux';

import Actions from '../home/Actions';
import Editor from './Editor';

const assignmentStyle = {
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
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
  match: { params: { assignmentId } },
  parts,
}) => {
  const partId = assignments[assignmentId].openTab;
  const editorIds = parts[partId].editorIds;

  return (
    <div style={style}>
      <div style={assignmentStyle}>
        <div style={subStyle}>{
          editorIds.map((editorId) => {
            const { code, filename, title, type } = editors[editorId];
            const mode = ((fileType) => {
              switch (fileType) {
                case 'C':
                case 'C++':
                case 'C/C++':
                  return 'ace/mode/c_cpp';
                case 'bash':
                case 'sh':
                  return 'ace/mode/sh';
                default:
                  return '';
              }
            })(type);

            return (
              <div key={filename} style={wrapperStyle}>
                { title ? <Subheader>{filename}</Subheader> : null }
                <Editor defaultValue={code} id={editorId} mode={mode} />
              </div>
            );
          })
        }</div>
        <Actions
          assignmentId={assignmentId}
          editorIds={editorIds}
          partId={partId}
        />
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
