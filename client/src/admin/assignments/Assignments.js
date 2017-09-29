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
  height: '100%',
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
      assignments.map(({
        attempts,
        dueDate,
        id,
        name,
        visible,
      }) => (
        <tr>
          <td><ConfigUpload button={<ContentCreate />} type="update" /></td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{dueDate}</td>
          <td>{attempts}</td>
          <td>{visible ? 'visible' : ''}</td>
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

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(Assignments));
