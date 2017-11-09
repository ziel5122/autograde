import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import {
  addEditorId,
  removeEditorId,
  setEditor,
  unsetEditor,
} from '../../../redux/actions/edit-assignment';

const buttonStyle = {
  /* eslint-disable no-dupe-keys */
  cursor: 'hand',
  cursor: 'pointer',
  /* eslint-enable no-dupe-keys */
};

class AddRemove extends PureComponent {
  onAddEditor = () => {
    const editorId = v4();
    const editor = {
      filename: '',
      title: false,
      type: '',
    };
    const { dispatch, partId } = this.props;
    dispatch(addEditorId(partId, editorId));
    dispatch(setEditor(editorId, editor));
  };

  onRemoveEditor = () => {
    const { dispatch, partId, parts } = this.props;
    const { editorIds } = parts[partId];
    const editorId = editorIds[editorIds.length - 1];
    dispatch(removeEditorId());
    dispatch(unsetEditor(editorId));
  };

  render() {
    return (
      <tfoot>
        <tr>
          <td>
            <Remove onClick={this.onRemoveEditor} style={buttonStyle} />
            <Add onClick={this.onAddEditor} style={buttonStyle} />
          </td>
        </tr>
      </tfoot>
    );
  }
}

const mapStateToProps = ({ editAssignment: { parts } }) => ({
  parts,
});

export default connect(mapStateToProps)(AddRemove);
