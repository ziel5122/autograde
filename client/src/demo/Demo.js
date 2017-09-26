import Paper from 'material-ui/Paper';
import React from 'react';

import Feedback from './Feedback';
import Instructions from './Instructions';
import Options from './Options';

const leftStyle = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  height: '100%',
};

const paperStyle = {
  display: 'flex',
  height: '100%',
  width: '100%',
};

const rightStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '200px',
};

const style = {
  flex: 1,
  maxWidth: '1000px',
  width: '100%',
};

const Demo = () => (
  <div style={style}>
    <Paper style={paperStyle} zDepth={5}>
      <div style={leftStyle}>
        <Options />
        <div>Editor</div>
      </div>
      <div style={rightStyle}>
        <Instructions />
        <Feedback />
      </div>
    </Paper>
  </div>
);

export default Demo;
