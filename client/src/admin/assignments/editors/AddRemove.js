import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

const buttonStyle = {
  /* eslint-disable no-dupe-keys */
  cursor: 'hand',
  cursor: 'pointer',
  /* eslint-enable no-dupe-keys */
};

class AddRemove extends PureComponent {
  constructor() {
    super();
    this.onAddEditor = this.onAddEditor.bind(this);
    this.onRemoveEditor = this.onRemoveEditor.bind(this);
  }

  onAddEditor() {
    const editorId = v4();
    const { addEditorId, setEditEditor } = this.props;
    const editor = {
      filename: '',
      title: false,
      type: '',
    };
    addEditEditorId(editorId);
    setEditEditor(editorId, editor);
  }

  onRemoveEditor() {
    const { partId, parts, removeEditorId, unsetEditorId } = this.props;
    const { editorIds } = parts[partId];
    const editorId = editorIds[editorIds.length - 1];
    removeEditEditorId();
    unsetEditEditor(editorId);
  }

  render() {
    return (
      <tfoot>
        <tr>
          <td>
            <Add onClick={this.onAddEditor} style={buttonStyle} />
            <Remove onClick={this.onRemoveEditor} style={buttonStyle} />
          </td>
        </tr>
      </tfoot>
    );
  }
}

const mapStateToProps = ({ edit: { parts } }) => ({
  parts,
});

const mapDispatchToProps = dispatch => ({
  addEditEditorId(editorId) {
    dispatch({
      editorId,
      type: 'ADD_EDIT_EDITOR_ID',
    });
  },

  removeEditEditorId() {
    dispatch({
      type: 'REMOVE_EDIT_EDITOR_ID',
    });
  },

  setEditEditor(editorId, editor) {
    dispatch({
      editor,
      editorId,
      type: 'SET_EDIT_EDITOR',
    });
  },

  unsetEditEditor(editorId) {
    dispatch({
      editorId,
      type: 'UNSET_EDIT_EDITOR',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRemove);
