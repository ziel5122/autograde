import Subheader from 'material-ui/Subheader';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';

import PartDetails from './Details';

const buttonStyle = {
  /* eslint-disable no-dupe-keys */
  cursor: 'hand',
  cursor: 'pointer',
  /* eslint-enable no-dupe-keys */
};

const style = {
  display: 'flex',
  width: '100%',
};

const tableStyle = {
  paddingLeft: '12px',
  paddingRight: '12px',
  width: '100%',
};

class EditParts extends PureComponent {
  constructor() {
    super()
    this.addPart = this.addPart.bind(this);
    this.removePart = this.removePart.bind(this);
  }

  addPart() {
    const partId = v4();
    const { addEditPartId, setEditPart } = this.props;
    addEditPartId(partId);
    const part = {
      filename: '<filename>',
      attempts: 5,
      editorIds: [],
    };
    setEditPart(partId, part);
  }

  removePart() {
    const { partIds, removeEditPartId, unsetEditPart } = this.props;
    const partId = partIds[partIds.length - 1];
    unsetEditPart(partId);
    removeEditPartId();
  }

  render() {
    const { match: { url }, partIds, parts } = this.props;

    return (
      <div style={style}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <td><b>Name</b></td>
              <td style={{ textAlign: 'center' }}><b>Attempts</b></td>
              <td></td>
            </tr>
          </thead>
          <PartDetails partIds={partIds} parts={parts} url={url} />
          <tfoot>
            <tr>
              <td>
                <Remove onClick={this.removePart} style={buttonStyle} />
                <Add onClick={this.addPart} style={buttonStyle} />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ edit: { assignment: { partIds }, parts } }) => ({
  partIds,
  parts,
});

const mapDispatchToProps = dispatch => ({
  addEditPartId(partId) {
    dispatch({
      partId,
      type: 'ADD_EDIT_PART_ID',
    });
  },

  removeEditPartId() {
    dispatch({
      type: 'REMOVE_EDIT_PART_ID',
    });
  },

  setEditPart(partId, part) {
    dispatch({
      part,
      partId,
      type: 'SET_EDIT_PART',
    });
  },

  unsetEditPart(partId) {
    dispatch({
      partId,
      type: 'UNSET_EDIT_PART',
    });
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditParts)
);
