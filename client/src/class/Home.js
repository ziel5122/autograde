import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import React, { Component } from 'react';
import io from 'socket.io-client';

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

class Home extends Component {
  constructor() {
    super();
    const socket = io();
    socket.on('assignments', (data) => {
      console.log(data);
    });
    this.state = {
      Items: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/assignments/get-visible', {
      body: JSON.stringify({ token: sessionStorage.getItem('jwt') }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    })
      .then(response => response.json())
      .then(({ Items }) => {
        this.setState({
          Items: Items.filter(Item => Item.visible),
        });
      })
      .catch(err => console.log(err, err.stack));
  }

  render() {
    return (
      <div style={style}>
        <Paper style={paperStyle} zDepth={5}>
          <div style={menuStyle}>
            <Menu>
              <Subheader>Assignments</Subheader>
              {
                this.state.Items.map((Item) => {
                  return <MenuItem key={Item.id}>{Item.id}</MenuItem>;
                })
              }
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
