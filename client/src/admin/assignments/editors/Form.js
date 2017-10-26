import Done from 'material-ui/svg-icons/action/done';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Form extends PureComponent {
  constructor() {
    super();
    this.onEditorFilenameChange = this.onEditorFilenameChange.bind(this);
    this.onEditorTypeChange = this.onEditorTypeChange.bind(this);
    this.onEditorTitleChange = this.onEditorTitleChange.bind(this);
  }

  onEditorFilenameChange({ target: { value } }) {
    const { editorId, setEditorFilename } = this.props;
    setEditorFilename(editorId, value);
  }

  onEditorTitleChange({ target: { value } }) {
    const { editorId, setEditorTitle } = this.props;
    setEditorTitle(editorId, value);
  }

  onEditorTypeChange({ target: { value } }) {
    const { editorId, setEditorType } = this.props;
    setEditorType(editorId, value);
  }

  render() {
    const { addEditor, editor: { filename, title, type }, id} = this.props;

    return (
      <tr>
        <td>
          <input defaultValue={filename} id={`${id}filename`} />
        </td>
        <td>
          <select defaultValue={type} id={`${id}select`}>
            <option value="C">C</option>
            <option value="bash">bash</option>
          </select>
        </td>
        <td>
          <Done />
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setEditorFilename(editorId, filename) {
    dispatch({
      editorId,
      filename,
      type: 'SET_EDIT_EDITOR_FILENAME',
    });
  },

  setEditorFileType(editorId, fileType) {
    dispatch({
      editorId,
      fileType,
      type: 'SET_EDIT_EDITOR_FILE_TYPE',
    });
  },

  setEditorTitle(editorId, title) {
    dispatch({
      editorId,
      title,
      type: 'SET_EDIT_EDITOR_TITLE',
    });
  },
});

export default connect(undefined, mapDispatchToProps)(Form);
