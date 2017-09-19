import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Editor from './Editor';
import EditorMenu from './EditorMenu';

const classHomeStyles = {
  height: '100%',
  width: '100%',
};

const paperStyles = {
  display: 'flex',
  height: 'calc(100% - 48px)',
  margin: '24px',
  width: 'calc(100% - 48px)',
};

class ClassHome extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      darkTheme: false,
      fontSize: 14,
    };
    this.handleEditor = this.handleEditor.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleEditor(code) {
    this.setState({ code });
  }

  handleSlider(event, value) {
    this.setState({ fontSize: value });
  }

  handleToggle() {
    this.setState({ darkTheme: !this.state.darkTheme });
  }

  render() {
    return (
      <div style={classHomeStyles}>
        <Paper id="paper" style={paperStyles} zDepth={5}>
          <Editor
            fontSize={this.state.fontSize}
            handleEditor={this.handleEditor}
            mode="ace/mode/c_cpp"
            theme={this.state.darkTheme}
            value={this.state.code}
          />
          <EditorMenu />
        </Paper>
      </div>
    );
  }
}

export default withRouter(ClassHome);
