import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentCreate from 'material-ui/svg-icons/content/create';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ConfigUpload from './ConfigUpload';

const style = {
  margin: '24px',
  width: '100%',
};

const Assignments = ({ assignments }) => (
  <table style={style}>
    <thead>
      <tr>
        <td />
        <td>Assignment</td>
        <td>Due</td>
        <td>Attempts</td>
        <td>Visible</td>
      </tr>
    </thead>
    <tbody>{
      Object.keys(assignments).map(name => (
        <tr key={name}>
          <td><ConfigUpload button={<ContentCreate />} type="update" /></td>
          <td>{name}</td>
          <td>{assignments[name].dueDate}</td>
          <td>{assignments[name].attempts}</td>
          <td>{assignments[name].visible ? 'visible' : ''}</td>
        </tr>
      ))
    }</tbody>
    <tfoot>
      <tr>
        <td><ConfigUpload button={<ContentAdd />} type="add" /></td>
      </tr>
    </tfoot>
  </table>
);

Assignments.propTypes = {
  assignments: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(Assignments));
