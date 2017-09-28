import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AssignmentEdit from './AssignmentEdit';
import AssignmentRow from './AssignmentRow';

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

const $ = document.getElementById.bind(document);

class Assignments extends PureComponent {
  constructor() {
    super();
    this.state = {
      editing: -1,
    };
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
  }

  edit(index) {
    this.setState({ editing: index });
  }

  save(id) {
    const name = $('name').value;
    const dueDate = $('due').value;
    const attempts = $('attempts').value;
    const visible = $('visible').checked;

    const assignment = { id, name, dueDate, attempts, visible };

    console.log(assignment);

    fetch('http://localhost:3000/assignments/set-visible', {
      body: JSON.stringify({
        token: sessionStorage.getItem('jwt'),
        changes: [assignment],
      }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    })
    .then(() => {
      this.setState({ editing: -1 });
    })
    .catch(err => console.log(err, err.stack));
  }

  render() {
    console.log(this.state);
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
              this.props.assignments.map((assignment, index) => (
                this.state.editing === index ?
                  <AssignmentEdit
                    assignment={assignment}
                    key={assignment.id}
                    save={() => this.save(assignment.id)}
                  />
                :
                <AssignmentRow
                  assignment={assignment}
                  edit={() => this.edit(index)}
                  key={assignment.id}
                />
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
