import fetch from 'isomorphic-fetch';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/theme/terminal';

const style = {
  marginTop: '8px',
};

let code = `#include <stdio.h>

int main() {
  printf("Hello, World!\\n");
}`;

const onChange = (newValue) => {
  code = newValue;
};

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      output: 'Output will print here',
    };
    this.runCode = this.runCode.bind(this);
  }

  runCode() {
    fetch('http://localhost:3000/run/code', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        code,
        language: 'c',
      }),
    })
    .then(response => response.text())
    .then(text => this.setState({ output: text }))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="demo">
        <Paper className="demo-paper">
          <AceEditor
            defaultValue={code}
            className="editor"
            width="640px"
            mode="c_cpp"
            theme="terminal"
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            style={style}
            value={code}
          />
          <div className="demo-text">
            <Paper className="demo-text-paper">
              <span className="demo-title">{'demo'}</span>
              <br />
              <span className="demo-description">
                {'This is a basic "Hello World" example. It prints "Hello, World!" to standard output'}
              </span>
              <FlatButton label="run" hoverColor="#d3d3d3" onTouchTap={this.runCode} />
              <div className="demo-actions-output-wrapper">
                <div className="demo-actions-output">
                  {this.state.output}
                </div>
              </div>
            </Paper>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Demo;
