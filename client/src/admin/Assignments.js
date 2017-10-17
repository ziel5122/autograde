// import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentCreate from 'material-ui/svg-icons/content/create';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ConfigUpload from './ConfigUpload';

const style = {
  padding: '24px',
  width: '100%',
};

const theadStyle = {
  background: 'slateblue',
  color: 'whitesmoke',
};

const Assignments = ({ assignmentIds, assignments }) => (
  <table style={style}>
    <thead style={theadStyle}>
      <tr>
        <td />
        <td>Name</td>
        <td>Due</td>
        <td>Visible</td>
      </tr>
    </thead>
    <tbody>{
      assignmentIds.map((assignmentId, index) => {
        const { name, dueDate, visible } = assignments[assignmentId];

        return (
          <tr key={index}>
            <td><ContentCreate /></td>
            <td>{name}</td>
            <td>{dueDate}</td>
            <td>{visible}</td>
          </tr>
        );
      })
    }</tbody>
    <tfoot>
      <tr>
        <td><ConfigUpload /></td>
      </tr>
    </tfoot>
  </table>
);

const mapStateToProps = ({ assignmentIds, assignments }) => ({
  assignmentIds,
  assignments,
});

export default withRouter(connect(mapStateToProps)(Assignments));
