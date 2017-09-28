import React from 'react';

const editStyle = {
  border: 'solid orangered 2px',
};

const leftFormStyle = {
  textAlign: 'right',
};

const AssignmentEdit = ({
  assignment: {
    attempts,
    dueDate,
    id,
    name,
    visible,
  },
  save,
}) => (
  <tr>
    <td colSpan={6}>
      <div style={editStyle}>
        <div
          onClick={save}
          style={{
            textAlign: 'center',
            width: '30px'
          }}
        >
          &#9998;
        </div>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={leftFormStyle}>Name</td>
              <td><input id="name" defaultValue={name} /></td>
            </tr>
            <tr>
              <td style={leftFormStyle}>Due</td>
              <td>
                <input
                  defaultValue={dueDate}
                  id="due"
                  type="date"
                />
              </td>
            </tr>
            <tr>
              <td style={leftFormStyle}>Attempts</td>
              <td>
                <input
                  defaultValue={attempts}
                  id="attempts"
                  type="number"
                />
              </td>
            </tr>
            <tr>
              <td style={leftFormStyle}>Visible</td>
              <td>
                <input
                  defaultChecked={visible}
                  id="visible"
                  type="checkbox"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </td>
  </tr>
);

export default AssignmentEdit;
