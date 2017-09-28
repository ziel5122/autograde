import React, { PureComponent } from 'react';

const leftFormStyle = {
  textAlign: 'right',
};

class New extends PureComponent {
  state = {
    parts: 1,
  };

  render() {
    return (
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={leftFormStyle}>Name</td>
            <td><input id="name" /></td>
          </tr>
          <tr>
            <td style={leftFormStyle}>Due</td>
            <td colSpan={3}><input id="due" type="date" /></td>
          </tr>
          <tr>
            <td style={leftFormStyle}>Attempts</td>
            <td><input defaultValue={5} id="attempts" type="number" /></td>
          </tr>
          <tr>
            <td style={leftFormStyle}>Parts</td>
            <td>
              <input
                defaultValue={this.state.parts}
                id="parts"
                onChange={({ target: { value } }) => {
                  this.setState({ parts: Number(value) });
                }}
                type="number"
              />
            </td>
          </tr>
          {
            this.state.parts > 1 ?
              [...Array(this.state.parts).keys()].map((partNum) => (
                <tr key={partNum}>
                  <td colSpan={2} style={leftFormStyle}>
                    {partNum}
                  </td>
                  <td style={leftFormStyle}>Name</td>
                  <td><input id={`name${partNum}`} /></td>
                  <td style={leftFormStyle}>Editors</td>
                  <td>
                    <input
                      defaultValue={1}
                      id={`editors${partNum}`}
                      type="number"
                    />
                  </td>
                </tr>
              ))
              :
              null
          }
          <tr>
            <td style={leftFormStyle}>Grading Zip</td>
            <td><input type="file" /></td>
          </tr>
          <tr>
            <td style={leftFormStyle}>Visible</td>
            <td><input id="visible" type="checkbox" /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default New;
