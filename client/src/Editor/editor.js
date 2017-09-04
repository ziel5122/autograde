import brace from 'brace';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/theme/chrome';
import 'brace/theme/terminal';

const lightTheme = 'chrome';
const darkTheme = 'terminal';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      fontSize: 12,
      theme: lightTheme,
    };
  }

  componentWillMount() {
    this.props.openAssignment();
  }

  render() {
    return (
      <div
        style={{
          alignItems: 'flex-start',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Paper
          zDepth={2}
        >
          <AceEditor
            fontSize={this.state.fontSize}
            mode="c_cpp"
            onChange={(code) => this.setState({ code })}
            style={{
              display: 'inline-block',
              margin: 0,
            }}
            theme={this.state.theme}
            value={this.state.code}
            wrapEnabled={true}
          />
        <div
          style={{
            display: 'inline-block',
            padding: '16px',
            verticalAlign: 'top',
          }}
        >
          <Toggle
            label="Theme"
            onToggle={(event, isInputChecked) => {
              this.setState({
                theme: isInputChecked ? darkTheme : lightTheme,
              });
            }}
            thumbSwitchedStyle={{ backgroundColor: 'orangered' }}
            trackSwitchedStyle={{ backgroundColor: 'orangered' }}
          />
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              height: '72px',
              justifyContent: 'center',
            }}
          >
            <div style={{ marginRight: '8px' }}>Font Size</div>
            <Slider
              axis="y"
              defaultValue={14}
              min={10}
              max={24}
              onChange={(event, value) => {
                this.setState({ fontSize: value });
              }}
              step={2}
              sliderStyle={{
                height: '48px',
                margin: 0,
              }}
            />
          </div>
        </div>
        </Paper>
      </div>
    );
  }
};

export default Editor;
