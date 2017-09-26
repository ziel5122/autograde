import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const flexTdStyle = {
  flex: 1,
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

const visibleStyle = {
};

class Assignments extends PureComponent {
  state = {
    editing: null,
  };

  render() {
    return (
      <div style={style}>
        <table style={tableStyle}>
          <thead>
            <tr style={{ display: 'flex', flex: 1 }}>
              <td style={flexTdStyle}>Assignment</td>
              <td style={flexTdStyle}>Due</td>
              <td style={visibleStyle}>Visible</td>
            </tr>
          </thead>
          <tbody>
            {
              this.props.assignments.map(({ id, name, dueDate, visible }) => (
                <tr key={id} stlye={{ display: 'flex' }}>
                  <td style={flexTdStyle}>{name}</td>
                  <td style={flexTdStyle}>{dueDate}</td>
                  <td><MenuItem style={visibleStyle} checked={visible} /></td>
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

export default connect(mapStateToProps)(Assignments);

// <td style={{ background: visible ? 'green' : 'red' }}></td>
