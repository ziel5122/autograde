import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import React from 'react';

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

  </div>
);

export default EditorMenu;
