import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AssignmentRow from './AssignmentRow';

const flexTdStyle = {

};

const style = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%',
  width: '100%',
};

const tableStyle = {
  flex: 1,
  width: '100%',
};

class Assignments extends PureComponent {
  state = {
    editing: -1,
  };

  render() {
    return (
      <div style={style}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <td></td>
              <td>ID</td>
              <td>Assignment</td>
              <td>Due</td>
              <td style={{ textAlign: 'center' }}>Attempts</td>
              <td style={{ textAlign: 'center' }}>Visible</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.assignments.map(assignment => (
                <AssignmentRow key={assignment.id} {...assignment} />
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(Assignments));

// <td style={{ background: visible ? 'green' : 'red' }}></td>
