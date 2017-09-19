import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import React from 'react';

import EditorOptions from './EditorOptions';

const listItemStyles = {
  flex: 1,
  fontSize: '16px',
  lineHeight: '16px',
  padding: '16px',
};

const EditorMenu = ({ attempts, feedback, setAttempts, setFeedback }) => (
  <div style={{ width: '208px' }}>
    <EditorOptions />
    <Divider />
    <Subheader>Important</Subheader>
    <div style={listItemStyles}>{'Shell must prompt user with "msh> "'}</div>
    <div style={listItemStyles}>gcc 6.3.0</div>
    <div style={listItemStyles}>
      Means of compilation:<br />
      <span style={{ background: 'yellow' }}>{'gcc <input> -o <output>'}</span>
    </div>
    <div style={listItemStyles}>
      <FlatButton
        backgroundColor="darkgray"
        hoverColor="orangered"
        label="submit"
        labelStyle={{ color: 'white' }}
        onClick={(e) => {
          e.preventDefault();
          fetch('/docker/run', {
            body: JSON.stringify({
              code: this.state.code,
              token: sessionStorage.getItem('jwt'),
            }),
            headers: {
              'content-type': 'application/json',
            },
            method: 'post',
          })
            .then(response => response.json())
            .then(({ results, newAttempts }) => {
              setFeedback(results);
              setAttempts(newAttempts);
            })
            .catch(err => console.error(err));
        }}
      />
    </div>
    <Divider />
    <Subheader>Feedback</Subheader>
    <div style={listItemStyles}>{feedback}</div>
    <div style={listItemStyles}>{`Attempts: ${attempts}`}</div>
  </div>
);

export default EditorMenu;
