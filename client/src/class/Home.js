import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import React, { PureComponent } from 'react';

const paperStyle = {
  background: 'whitesmoke',
  flex: 1,
};

const style = {
  display: 'flex',
  flex: 1,
  width: '100%',
};

class Home extends PureComponent {
  componentDidMount() {

  }

  render() {
    return (
      <div style={style}>
        <Paper style={paperStyle} zDepth={5}>
          <Menu>
            <Subheader>Assignments</Subheader>
            <MenuItem>Homework 5</MenuItem>
            <MenuItem>Homework 6</MenuItem>
          </Menu>
        </Paper>
      </div>
    );
  }
}

export default Home;
