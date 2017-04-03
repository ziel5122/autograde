import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import React from 'react';

import Login from './Login';

import './Landing.css';

const style2 = {
  height: '100%',
  width: '100%',
  textAlign: 'center',
  background: 'red',
  padding: 24,
  position: 'relative',
  boxSizing: 'border-box',
};

class Landing extends React.Component {

  render() {
    return(
      <div className="Landing" style={style2} >
        <Login />
        <br/>
        <br/>
        <Paper zDepth={5} >
          <h2>Code</h2>
          <textarea cols="80" rows="24"></textarea>
        </Paper>
      </div>
    );
  }
}

export default Landing;
