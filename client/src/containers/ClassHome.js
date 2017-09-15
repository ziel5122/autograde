import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import { Route, withRouter } from 'react-router-dom';

import 'brace/mode/c_cpp';
import 'brace/theme/chrome';
import 'brace/theme/terminal';

import Header from './Header';

const buttonStyles = {
    marginTop: '24px',
};

const classHomeStyles = {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
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
    attempts: this.props.attempts,
    code: '',
    feedback: '',
  };

  render() {
    return (
      <div style={classHomeStyles}>
        <Paper
          style={{
            alignItems: 'center',
            background: background(this.state.feedback),
            display: 'flex',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '4px',
            }}
          >
            <AceEditor
              fontSize={14}
              id="editor"
              mode="c_cpp"
              onChange={code => this.setState({ code })}
              theme="terminal"
              value={this.state.code}
              wrapEnabled
            />
            <div style={{ marginTop: '8px' }}>
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
                      console.log(feedback, attempts);
                      this.setState({ feedback, attempts });
                    })
                    .catch(err => console.error(err));
                }}
                style={buttonStyles}
              />
            <div>{`${this.state.feedback} Attempts: ${this.state.attempts}`}</div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRouter(ClassHome);
