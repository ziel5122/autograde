import ContentCreate from 'material-ui/svg-icons/content/create';
import Done from 'material-ui/svg-icons/action/done';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import ConfigUpload from './ConfigUpload';

const style = {
  padding: '24px',
  width: '100%',
};

const theadStyle = {
  background: 'slateblue',
  color: 'whitesmoke',
};

const Assignments = ({ assignmentIds, assignments, url }) => (
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

const mapStateToProps = ({ assignmentIds, assignments }) => ({
  assignmentIds,
  assignments,
});

export default withRouter(connect(mapStateToProps)(Assignments));
