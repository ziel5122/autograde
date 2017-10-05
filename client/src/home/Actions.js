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

const errorStyle = {
  background: 'rgba(255, 255, 0, .25)',
  flex: '1',
  margin: '8px',
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
      <FlatButton label="clear" style={buttonStyle} />
      <RaisedButton label="submit" style={buttonStyle} />
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
    <div style={errorStyle}>
      lots of text
    </div>
  </div>
);

export default Actions;
