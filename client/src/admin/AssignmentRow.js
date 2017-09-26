import React, { PureComponent } from 'react';

class AssignmentRow extends PureComponent {
  state = {
    'editing': false,
  };

  render() {
    const { id, name, dueDate, attempts, visible } = this.props;

    return (
        <tr>
          {
            this.state.editing ? (
              <div>
                <td
                  onClick={() => {
                    const newName = document.getEelementById('name').value;
                    const newDue = document.getElementById('dueDate').value;
                    const newAttempts = document.getElementById('attempts').value;

                    if (newName && newDue && newAttempts) {
                      updateAssignment(newName, newDue, newAttempts)
                      .then(() => this.setState({ editing: true }))
                      .catch((err) => {
                        this.setState({ editing: false });
                      });
                    }
                  }}
                  style={{ textAlign: 'center' }}
                >&#9998;</td>
                <td>{id}</td>
                <td><input id="name" /></td>
                <td><input id="dueDate" type="date" /></td>
                <td><input id="attempts" type="number" /></td>
                <td style={{ textAlign: 'center' }}>&#10004;</td>
              </div>
            ) : (
              <div>
                <td
                  onClick={() => this.setState({ editing: true })}
                  style={{ textAlign: 'center' }}
                >
                  &#9998;
                </td>
                <td>{id}</td>
                <td>{name}</td>
                <td>{dueDate}</td>
                <td style={{ textAlign: 'center' }}>{attempts}</td>
                <td style={{ textAlign: 'center' }}>&#10004;</td>
              </div>
            )
          }
        </tr>
    );
  }
}

export default AssignmentRow;
