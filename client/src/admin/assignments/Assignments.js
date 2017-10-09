import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ConfigUpload from './ConfigUpload';

const style = {
  padding: '24px',
  width: '100%',
};

const Assignments = ({ data, names }) => (
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
      names.map(name => (
        <tr key={name}>
          <td><ConfigUpload /></td>
          <td>{name}</td>
          <td>{data[name].dueDate}</td>
          <td>{data[name].attempts}</td>
          <td
            onClick={() => alert('clicked')}
            style={{
              background: data[name].visible ? 'green' : 'red',
            }}
          >
          </td>
        </tr>
      ))
    }</tbody>
    <tfoot>
      <tr>
        <td><ConfigUpload /></td>
      </tr>
    </tfoot>
  </table>
);

Assignments.propTypes = {
  assignments: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ assignments: { data, names } }) => ({
  data,
  names,
});

export default withRouter(connect(mapStateToProps)(Assignments));
