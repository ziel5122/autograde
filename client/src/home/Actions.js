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
  flex: '1',
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
  width: '250px',
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
    <div
      style={{
        display: 'flex',
        padding: '8px',
      }}
    >
      <FlatButton label="clear" style={{ marginRight: '4px' }} />
      <RaisedButton label="submit" style={{ marginLeft: '4px' }} />
    </div>
    <Divider style={dividerStyle} />
    <div style={segmentStyle}>
      <div style={buttonStyle}>{`Attempts: ${attempts}`}</div>
    </div>
    <Divider style={dividerStyle} />
    <div style={segmentStyle}>
      <div style={buttonStyle}>{`Result: ${result}`}</div>
    </div>
    <Divider style={dividerStyle} />
    <div style={segmentStyle}>
      <div style={buttonStyle}>Updated:</div>
      <div>{lastUpdate.date}:{lastUpdate.time}</div>
    </div>
    <Divider style={dividerStyle}/>
    <div style={errorStyle}>
      <div
        style={{
          background: 'rgba(255, 255, 0, .25)',
          color: 'red',
          flex: 1,
          height: 'calc(100% - 16px)',
          margin: '8px',
        }}
      >
        error text
      </div>
    </div>
  </div>
);

export default Actions;
