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
import styles from './styles';

class ClassHome extends Component {
  state = {
    code: '',
    feedback: '',
  };

  render() {
    const assignmentRoutes = this.props.assignments.map(
      ({ dueDate: { day, month, year } }, index) => (
        <Route
          path={`${this.props.match.url}/${year}${month}${day}`}
          component={() => <Editor hwNum={index + 1} />}
          key={index}
        />
      )
    );

    return (
      <div style={styles.classHome}>
        <Paper
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            style={{
              background: () => {
                switch (this.state.feedback) {
                  case 'correct':
                    return 'green';

                  case 'incorrect':
                    return 'gred';

                  default:
                    return 'white';
                }
              },
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
                  fetch('http://localhost:8892/docker/run', {
                    body: JSON.stringify({
                      code: this.state.code,
                      hwNum: 3,
                      id: '0808',
                    }),
                    headers: {
                      'content-type': 'application/json',
                    },
                    method: 'post',
                  })
                    .then(feedback => feedback.text())
                    .then(text => this.setState({ feedback: text }))
                    .catch(err => console.error(err));
                }}
                style={styles.button}
              />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRouter(ClassHome);
