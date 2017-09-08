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

import AssignmentMenu from '../AssignmentMenu';
import Editor from '../Editor';
import Header from './Header';
import styles from './styles';

class ClassHome extends Component {
  state = {
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
        <Paper>
          <Header />
          <AceEditor
            fontSize={18}
            wrapEnabled
          />
        </Paper>
      </div>
    );
  }
}

export default withRouter(ClassHome);
