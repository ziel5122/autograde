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

const EditorMenu = ({ attempts, code, feedback, setAttempts, setFeedback }) => (
  <div style={{ width: '208px', margin: '8px' }}>
    <EditorOptions />
    <Divider />
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
              code,
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
    <Subheader>Feedback</Subheader>
    <div style={listItemStyles}>{feedback}</div>
    <div style={listItemStyles}>{`Attempts: ${attempts}`}</div>
  </div>
);

export default EditorMenu;
