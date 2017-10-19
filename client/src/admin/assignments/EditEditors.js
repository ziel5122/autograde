import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';

import EditorForm from './EditorForm';

const buttonStyle = {
  /* eslint-disable no-dupe-keys */
  cursor: 'hand',
  cursor: 'pointer',
  /* eslint-enable no-dupe-keys */
};

class EditEditors extends PureComponent {
  constructor(props) {
    super(props);

    const { editors, match: { params: { partId } }, parts } = this.props;
    const { editorIds } = parts[partId];

    this.state = {
      editorIds,
      editors: editorIds.reduce((editorsMap, editorId) => {
        editorsMap[editorId] = editors[editorId];
        return editorsMap;
      }, {}),
    };

    this.addEditor = this.addEditor.bind(this);
    this.removeEditor = this.removeEditor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { editors, match: { params: { partId } }, parts } = nextProps;
    const { editorIds } = parts[partId];

    this.setState({
      editorIds,
      editors: editorIds.reduce((editorsMap, editorId) => {
        editorsMap[editorId] = editors[editorId];
        return editorsMap;
      }, {}),
    });
  }

  addEditor() {
    const { editorIds, editors } = this.state;
    const editorId = v4();
    this.setState({
      editorIds: [...editorIds, editorId],
      editors: {
        ...editors,
        [editorId]: {
          filename: '',
          title: false,
          type: '',
        },
      }
    });
  }

  removeEditor() {
    const { editorIds, editors } = this.state;
    const lastIndex = editorIds.length - 1;
    const editorId = editorIds[lastIndex];
    const { [editorId]: {}, ...rest } = editors;
    this.setState({
      editorIds: editorIds.slice(0, lastIndex),
      editors: rest,
    });
  }

  render() {
    console.log(this.state);
    const { editorIds, editors } = this.state;

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
          editorIds.map(editorId => {
            const editor = editors[editorId];
            return (
              <EditorForm
                addEditor={this.addEditor}
                editor={editor}
                key={editorId}
                id={editorId}
              />
            );
          })
        }</tbody>
        <tfoot>
          <tr>
            <td>
              <Add onClick={this.addEditor} style={buttonStyle} />
              <Remove onClick={this.removeEditor} style={buttonStyle} />
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

const mapStateToProps = ({ editors, parts }) => ({
  editors,
  parts,
});

export default withRouter(connect(mapStateToProps)(EditEditors));
