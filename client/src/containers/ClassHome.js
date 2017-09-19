import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { Route, withRouter } from 'react-router-dom';

import Editor from './Editor';
import Header from './Header';

const buttonStyles = {
  marginTop: '24px',
};

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

const listItemStyles = {
  flex: 1,
  fontSize: '16px',
  lineHeight: '16px',
  padding: '16px',
}

const optionsLeftStyles = {
  textAlign: 'right',
};

const background = (feedback) => {
  switch (feedback) {
    case 'correct':
      return 'green';
    case 'incorrect':
      return 'red';
    default:
      return 'white';
  }
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
          <div style={{ height: '100%', flex: 1 }}></div>
          <div style={{ width: '208px' }}>
            <Subheader>Options</Subheader>
            <table style={{ width: '100%' }}>
              <tr>
                <td style={optionsLeftStyles}>Dark Theme</td>
                <td>
                  <Toggle
                    inputStyle={{ width: '48px' }}
                    onToggle={this.handleToggle}
                    style={{ width: '48px' }}
                  />
                </td>
              </tr>
              <tr>
                <td style={optionsLeftStyles}>Font Size</td>
                <td>
                  <Slider
                    defaultValue={14}
                    min={10}
                    max={18}
                    onChange={this.handleSlider}
                    step={2}
                    style={{
                      flex: 1,
                      marginLeft: '16px',
                      width: '56px',
                    }}
                    sliderStyle={{
                      height: '16px',
                      flex: 1,
                      margin: 0,
                    }}
                  />
                </td>
              </tr>
            </table>
            <Divider />
            <Subheader>Important</Subheader>
            <div style={listItemStyles}>
              {`Shell must prompt user with "msh> "`}
            </div>
            <div style={listItemStyles}>
              {`gcc 6.3.0`}
            </div>
            <div style={listItemStyles}>
              Means of compilation:<br />
              <span style={{ background: 'yellow' }}>{'gcc <input> -o <output>'}</span>
            </div>
            <div style={listItemStyles}>
              <FlatButton
                backgroundColor="darkgray"
                hoverColor="orangered"
                label="submit"
                labelStyle={{ color: 'white' }}
                onClick={(e) => {
                  e.preventDefault();
                  fetch(`/docker/run`, {
                    body: JSON.stringify({
                      code: this.state.code,
                      token: sessionStorage.getItem('jwt'),
                    }),
                    headers: {
                      'content-type': 'application/json',
                    },
                    method: 'post',
                  })
                    .then((response) => response.json())
                    .then(({ feedback, attempts }) => {
                      this.props.setFeedback(feedback);
                      this.props.setAttempts(attempts);
                    })
                    .catch(err => console.error(err));
                }}
              />
            </div>
            <Divider />
            <Subheader>Feedback</Subheader>
            <div style={listItemStyles}>{this.props.feedback}</div>
            <div style={listItemStyles}>{`Attempts: ${this.props.attempts}`}</div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRouter(ClassHome);
