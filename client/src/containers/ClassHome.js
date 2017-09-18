import 'brace';
import ace from 'ace-builds/src-noconflict/ace';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { Route, withRouter } from 'react-router-dom';

import 'brace/mode/c_cpp';
import 'brace/theme/terminal';

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

const themeStyles = (theme) => {
  return theme === 'ace/theme/clouds' ?
    {
      background: 'black',
      color: 'gray',
    } : {
      background: 'white',
      color: 'black',
    }
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
  state = {
    theme: 'ace/theme/clouds',
  };

  render() {
    return (
      <div style={classHomeStyles}>
        <Paper id="paper" style={paperStyles} zDepth={5}>
          <Editor theme={this.state.theme} />
          <div style={{ height: '100%', flex: 1 }}></div>
          <List
            style={{
              marginRight: '24px',
            }}
          >
            <Subheader>Options</Subheader>
            <ListItem
              onClick={() => {
                if (this.state.theme === 'ace/theme/clouds') {
                  this.setState({ theme: 'ace/theme/clouds_midnight' });
                } else {
                  this.setState({ theme: 'ace/theme/clouds' });
                }
              }}
              primaryText={
                this.state.theme === 'ace/theme/clouds' ?
                  'Dark Theme' : 'Light Theme'
              }
              innerDivStyle={themeStyles(this.state.theme)}
            />
            <ListItem>
              Font Size
            </ListItem>
            <Divider />
            <Subheader>Important</Subheader>
            <ListItem>
              {`Ensure your shell prompts the user with "msh> "`}
            </ListItem>
            <ListItem>
              {`Compiled with gcc 6.3.0 using "gcc <input> -o <output>"`}
            </ListItem>
            <ListItem>
              <FlatButton
                backgroundColor="darkgray"
                hoverColor="orangered"
                label="submit"
                labelStyle={{ color: 'white' }}
                onClick={() => {
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
                style={buttonStyles}
              />
            </ListItem>
            <Divider />
            <Subheader>Feedback</Subheader>
            <ListItem>
              {`${this.props.feedback} Attempts: ${this.props.attempts}`}
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}

export default withRouter(ClassHome);

/*
<AceEditor
  fontSize={14}
  id="editor"
  mode="c_cpp"
  onChange={code => this.setState({ code })}
  style={{
    height: paperStyles.height,
  }}
  theme="terminal"
  value={this.state.code}
  wrapEnabled
/>
*/
