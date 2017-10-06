import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const buttonStyle = {
  marginLeft: '8px',
  marginRight: '8px',
  marginTop: '8px',
};

const dividerStyle = {
  width: '100%',
};

const segmentStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '8px',
};

const style = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
};

const Actions = ({
  attempts = 0,
  lastUpdate = {
    date: '2017-09-06',
    time: '12:12:12',
  },
  result = 'incorrect',
}) => (
  <div style={style}>
    <div style={segmentStyle}>
      <RaisedButton label="submit" />
    </div>
    <Divider style={dividerStyle} />
    <div style={segmentStyle}>
      <div style={buttonStyle}>{`Attempts: ${attempts}`}</div>
    </div>
    <Divider style={dividerStyle} />
    <div style={segmentStyle}>
      <div style={buttonStyle}>Result:</div>
      <div>{result}</div>
    </div>
    <Divider style={dividerStyle} />
    <div style={segmentStyle}>
      <div style={buttonStyle}>Updated:</div>
      <div>{lastUpdate.date}</div>
      <div>{lastUpdate.time}</div>
    </div>
    <Divider style={dividerStyle}/>
  </div>
);

export default Actions;
