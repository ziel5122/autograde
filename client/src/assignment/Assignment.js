import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Editor from './Editor';
import EditorMenu from './EditorMenu';
import InstructionList from './InstructionList';

const classHomeStyles = {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
};

const highlightStyles = {
  background: 'yellow',
  color: 'black',
};

const leftStyles = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginRight: '8px',
};

const paperStyles = {
  display: 'flex',
  height: 'calc(100% - 48px)',
  margin: '24px',
  maxWidth: '1000px',
  width: 'calc(100% - 48px)',
};

const instructions = [
  [
    {
      text: 'Shell must prompt user with ',
    },
    {
      text: '"msh> "',
      highlight: true,
    },
  ],
  [
    {
      text: 'Compiled using gcc ',
    },
    {
      text: '6.3.0',
      highlight: true,
    },
  ],
  [
    {
      text: 'Command: ',
    },
    {
      text: 'gcc <INPUT> -o <OUTPUT>',
      highlight: true,
    },
  ],
];

class Assignment extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
    };
    this.handleEditor = this.handleEditor.bind(this);
  }

  handleEditor(code) {
    this.setState({ code });
  }

  render() {
    return (
      <div style={classHomeStyles}>
        <Paper id="paper" style={paperStyles} zDepth={5}>
          <div style={leftStyles}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstructionList instructions={instructions} />
            </div>
            <Editor
              fontSize={this.state.fontSize}
              handleEditor={this.handleEditor}
              mode="ace/mode/c_cpp"
              theme={this.state.darkTheme}
              value={this.state.code}
            />
          </div>
          <EditorMenu />
        </Paper>
      </div>
    );
  }
}

export default withRouter(Assignment);
