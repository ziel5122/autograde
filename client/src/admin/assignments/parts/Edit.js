import Subheader from 'material-ui/Subheader';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { v4 } from 'uuid';

import {
  addPartId,
  removePartId,
  setPart,
  unsetPart
} from '../../../redux/actions/edit-assignment';
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
  addPart = () => {
    const partId = v4();
    const { dispatch } = this.props;
    dispatch(addPartId(partId));
    const part = {
      filename: '<filename>',
      attempts: 5,
      editorIds: [],
    };
    dispatch(setPart(partId, part));
  };

  removePart = () => {
    const { dispatch, partIds } = this.props;
    const partId = partIds[partIds.length - 1];
    dispatch(unsetPart(partId));
    dispatch(removePartId());
  };

  render() {
    const { match: { url }, partIds, parts } = this.props;
    console.log(partIds);

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

const mapStateToProps = ({ editAssignment: { assignment, parts } }) => {
  const { partIds } = assignment;
  return { partIds, parts };
};

export default withRouter(connect(mapStateToProps)(EditParts));
