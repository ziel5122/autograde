import React from 'react';

const leftFormStyle = {
  textAlign: 'right',
};

const New = () => (
  <table style={{ width: '100%' }}>
    <tbody>
      <tr>
        <td style={leftFormStyle}>Name</td>
        <td><input id="name" /></td>
      </tr>
      <tr>
        <td style={leftFormStyle}>Due</td>
        <td><input id="due" type="date" /></td>
      </tr>
      <tr>
        <td style={leftFormStyle}>Attempts</td>
        <td><input defaultValue={5} id="attempts" type="number" /></td>
      </tr>
      <tr>
        <td style={leftFormStyle}>Visible</td>
        <td><input id="visible" type="checkbox" /></td>
      </tr>
    </tbody>
  </table>
);

export default New;
