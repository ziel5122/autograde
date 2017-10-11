import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, { PureComponent } from 'react';

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
  background: 'whitesmoke',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
};

class Actions extends PureComponent {
  constructor() {
    super();
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick() {
    const { assignmentId, editorIds, partId } = this.props;
    console.log(assignmentId, editorIds, partId);
  }

  render() {
    const attempts = 0;
    const lastUpdate = {
      date: '2017-09-06',
      time: '12:12:12',
    };
    const result = 'incorrect';

    return (
      <div style={style}>
        <Divider
          style={{
            ...dividerStyle,
            marginBottom: '8px',
          }}
        />
        <div style={segmentStyle}>
          <RaisedButton label="submit" onClick={this.handleSubmitClick} />
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
        <Divider style={dividerStyle} />
      </div>
    );
  }
}

export default Actions;
