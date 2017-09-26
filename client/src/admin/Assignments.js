import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
              <td>Assignment</td>
              <td>Due</td>
              <td style={{ textAlign: 'center' }}>Attempts</td>
              <td style={{ textAlign: 'center' }}>Visible</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.assignments.map(({
                attempts,
                dueDate,
                id,
                name,
                visible,
              }, index) => (
                <tr key={id}>
                  <td
                    onClick={() => this.setState({ editing: index })}
                    style={{ textAlign: 'center' }}
                  >
                    &#9998;
                  </td>
                  <td>{name}</td>
                  <td>{dueDate}</td>
                  <td style={{ textAlign: 'center' }}>
                    {
                      this.state.editing === index ? <input id={id} type="number" /> : attempts
                    }
                  </td>
                  <td style={{ textAlign: 'center' }}>&#10004;</td>
                </tr>
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
