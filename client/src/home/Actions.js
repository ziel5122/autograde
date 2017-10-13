import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

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
    const { assignmentId, editorIds, editors, partId, username } = this.props;
    const codeMap = editorIds.reduce((codeByFilename, editorId) => {
      const { code, filename } = editors[editorId];
      codeByFilename[filename] = code;
      return codeByFilename;
    }, {});

    fetch('/docker/post', {
      body: JSON.stringify({
        assignmentId,
        attempts: 5,
        codeMap,
        partId,
        token: sessionStorage.getItem('jwt'),
        username,
      }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    })
      .then(response => {
        if (response.status === 500) throw new Error();
        else {
          console.log(response);
          return response.json()
        }
      })
      .then(({ attempts, result }) => console.log(attempts, result))
      .catch(err => console.log(err, err.stack));
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

const mapStateToProps = ({ editors }) => ({
  editors,
});

export default connect(mapStateToProps)(Actions);
