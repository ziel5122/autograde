import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Actions from './Actions';
import Editor from './Editor';
import InstructionList from './InstructionList';
import Options from './Options';

const assignmentStyles = {
  flex: 1,
  margin: '24px',
  maxWidth: '1000px',
  width: '100%',
};


const leftStyles = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
};

const paperStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
};

const rightStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
};

const instructions = [
  'Prompt: "msh> "',
  'GCC version: 6.3.0 ',
  'Compilation: "gcc <INPUT> -o <OUTPUT>"',
];

const Assignment = () => (
  <div style={assignmentStyles}>
    <Paper id="paper" style={paperStyles} zDepth={5}>
      <div style={leftStyles}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstructionList instructions={instructions} />
        </div>
        <div style={{ flex: 1 }}>
          <Editor mode="ace/mode/c_cpp" />
        </div>
      </div>
      <div style={rightStyles}>
        <Options />
        <Divider />
        <Actions />
      </div>
    </Paper>
  </div>
);

export default withRouter(Assignment);
