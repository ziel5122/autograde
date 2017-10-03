import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentCreate from 'material-ui/svg-icons/content/create';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ConfigUpload from './ConfigUpload';
import Edit from './Edit';
import New from './New';
import Row from './Row';

const style = {
  margin: '24px',
  width: '100%',
};

const $ = document.getElementById.bind(document);

const Assignments = ({ assignments }) => (
  <table style={style}>
    <thead>
      <tr>
        <td></td>
        <td>ID</td>
        <td>Assignment</td>
        <td>Due</td>
        <td>Attempts</td>
        <td>Visible</td>
      </tr>
    </thead>
    <tbody>{
      Object.keys(assignments).map((id) => (
        <tr key={id}>
          <td><ConfigUpload button={<ContentCreate />} type="update" /></td>
          <td>{id}</td>
          <td>{assignments[id].name}</td>
          <td>{assignments[id].dueDate}</td>
          <td>{assignments[id].attempts}</td>
          <td>{assignments[id].visible ? 'visible' : ''}</td>
        </tr>
      ))
    }</tbody>
    <tfoot>
      <tr>
        <td><ConfigUpload button={<ContentAdd />}  type="add" /></td>
      </tr>
    </tfoot>
  </table>
);

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(Assignments));
