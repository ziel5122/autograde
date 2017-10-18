import ContentAdd from 'material-ui/svg-icons/content/add';
import React from 'react';
import { connect } from 'react-redux';

import EditorForm from './EditorForm';

const EditEditors = ({ editors, match: { params: { partId } }, parts }) => {
  const { editorIds } = parts[partId];

  return (
    <table>
      <thead>
        <tr>
          <td>Filename</td>
          <td>Type</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>{
        editorIds.map(editorId => (
          <EditorForm editor={editors[editorId]} key={editorId} />
        ))
      }</tbody>
      <tfoot><tr><td><ContentAdd /></td></tr></tfoot>
    </table>
  );
};

const mapStateToProps = ({ editors, parts }) => ({
  editors,
  parts,
});

export default connect(mapStateToProps)(EditEditors);
