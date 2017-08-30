import brace from 'brace';
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.openAssignment();
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Paper zDepth={2}>
          <AceEditor
            mode="java"
            style={{ marginTop: '8px' }}
            theme="github"
          />
        </Paper>
      </div>
    );
  }
};

export default Editor;
