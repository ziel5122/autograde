import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import React, { PureComponent } from 'react';

const menuStyle = {
  display: 'flex',
};

const paperStyle = {
  background: 'whitesmoke',
  flex: 1,
  maxWidth: '1000px'
};

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  width: '100%',
};

class Home extends PureComponent {
  componentDidMount() {
    fetch('/assignments/visible', {
      body: JSON.stringify({
        token: sessionStorage.getItem('jwt'),
      }),
      headers: {
        'content-type': 'application/json',
      },
      method: 'post',
    })
      .then(response => response.json())
      .then(json => conosle.log(json.assignments))
      .catch(err => console.log(err, err.stack));
  }

  render() {
    return (
      <div style={style}>
        <Paper style={paperStyle} zDepth={5}>
          <div style={menuStyle}>
            <Menu>
              <Subheader>Assignments</Subheader>
              <MenuItem>Homework 5</MenuItem>
              <MenuItem>Homework 6</MenuItem>
              <Divider />
              <Subheader>Options</Subheader>
            </Menu>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Home;
