import Subheader from 'material-ui/Subheader';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';

import EditorAddRemove from './AddRemove';
import EditorForm from './Form';

const style = {
  background: 'white',
  flex: '.333',
  marginLeft: '12px',
};

const Editors = ({ editors, match: { params: { partId } }, parts }) => {
  const { editorIds } = parts[partId];
  console.log(editors);
  console.log(editorIds);

  return (
    <div style={style}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <td><b>Filename</b></td>
            <td><b>Type</b></td>
            <td><b>Title</b></td>
          </tr>
        </thead>
        <tbody>{
          editorIds.map(editorId => {
            const editor = editors[editorId];
            return (
              <EditorForm
                editor={editor}
                key={editorId}
                id={editorId}
              />
            );
          })
        }</tbody>
        <EditorAddRemove partId={partId} />
      </table>
    </div>
  );
};

const mapStateToProps = ({ data: { editors }, editAssignment: { parts } }) => ({
  editors,
  parts,
});

export default withRouter(connect(mapStateToProps)(Editors));
