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
    this.state = {
      errorText: '',
      lastUpdated: {
        date: 'date',
        time: 'time',
      },
      result: '',
    };
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick() {
    const {
      assignmentId,
      editorIds,
      editors,
      partId,
      user: { parts },
      username
    } = this.props;
    const codeMap = editorIds.reduce((codeByFilename, editorId) => {
      const { code, filename } = editors[editorId];
      codeByFilename[filename] = code;
      return codeByFilename;
    }, {});

    const { attempts } = parts[partId];

    fetch('/docker/post', {
      body: JSON.stringify({
        assignmentId,
        attempts,
        codeMap,
        partId,
        token: sessionStorage.getItem('jwt'),
        username,
      }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    })
      .then(response => {
        switch (response.status) {
          case 500:
            this.setState({ errorText: 'something went wrong' });
            throw new Error('server error');
          case 400:
            this.setState({ errorText: 'error authorizing' });
            throw new Error('auth error');
          default:
            return response.json();
        }
      })
      .then(({ newAttempts, result }) => console.log(attempts, result))
      .catch(err => console.log(err, err.stack));
  }

  render() {
    const { errorText, lastUpdated, result } = this.state;
    const { partId, studentAssignments, user: { parts } } = this.props;
    console.log('parts', parts);
    const attempts = parts[partId] ? parts[partId].attempts : 0;

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
          <div>{lastUpdated.date}</div>
          <div>{lastUpdated.time}</div>
        </div>
        <Divider style={dividerStyle} />
      </div>
    );
  }
}

const mapStateToProps = ({ editors, user }) => ({
  editors,
  user,
});

export default connect(mapStateToProps)(Actions);
