import ContentCreate from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { CLEAR_ASSIGNMENT } from '../../redux/action-types/assignments';
import ConfigUpload from './ConfigUpload';

const style = {
  padding: '24px',
  width: '100%',
};

const theadStyle = {
  background: 'slateblue',
  color: 'whitesmoke',
};

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.props.clearEditAssignment();
  }

  render() {
    const { assignmentIds, assignments, match: { url } } = this.props;

    return (
      <table style={style}>
        <thead style={theadStyle}>
          <tr>
            <td />
            <td>ID</td>
            <td>Name</td>
            <td>Due</td>
            <td style={{ textAlign: 'center' }}>Visible</td>
          </tr>
        </thead>
        <tbody>{
          assignmentIds.map((assignmentId, index) => {
            const { name, dueDate, visible } = assignments[assignmentId];
            console.log(url);

            return (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>
                  <Link to={`${url}/${assignmentId}`}>
                    <ContentCreate />
                  </Link>
                </td>
                <td>{assignmentId}</td>
                <td>{name}</td>
                <td>{dueDate}</td>
                <td style={{ textAlign: 'center' }}><Done /></td>
              </tr>
            );
          })
        }</tbody>
        <tfoot>
          <tr>
            <td style={{ textAlign: 'center' }}><ConfigUpload /></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

const mapStateToProps = ({ data: { assignmentIds, assignments } }) => ({
  assignmentIds,
  assignments,
});

const mapDispatchToProps = dispatch => ({
  clearEditAssignment() {
    dispatch({
      type: CLEAR_ASSIGNMENT,
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
