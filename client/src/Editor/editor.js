import brace from 'brace';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
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
      code: `${props.hwNum}`,
      feedback: [],
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
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          height: '100%',
          justifyContent: 'center',
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
          <TextField
            floatingLabelFocusStyle={{ color: 'orangered' }}
            floatingLabelStyle={{ color: 'darkgray' }}
            floatingLabelText="password"
            style={{ width: '96px' }}
            type="password"
            underlineStyle={{ display: 'none' }}
          />
          <FlatButton
            backgroundColor="darkgray"
            hoverColor="orangered"
            label="submit"
            labelStyle={{ color: 'white' }}
            onClick={() => {
              fetch('http://localhost:8892/docker/run', {
                body: JSON.stringify({
                  code: this.state.code,
                  id: '0808',
                  hwNum: this.props.hwNum,
                }),
                headers: {
                  'content-type': 'application/json',
                },
                method: 'post',
              })
              .then(feedback => feedback.text())
              .then(feedbackText => {
                this.setState({
                  feedback: feedbackText.split('\n'),
                });
              })
              .catch((err) => console.error(err));
            }}
            style={{
              display: 'block',
              marginLeft: '4px',
              marginTop: '24px',
            }}
          />
          <div
            style={{
              height: '100%',
              marginTop: '16px',
              width: '100%',
            }}
          >
            {
              this.state.feedback.map((line, index) => (
                <p key={index} style={{ margin: '4px' }}>{line}</p>
              ))
            }
          </div>
        </div>
        </Paper>
      </div>
    );
  }
};

export default Editor;
