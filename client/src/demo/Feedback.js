import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const buttonsStyle = {
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
};

const style = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
};

const Feedback = () => (
  <div style={style}>
    <div style={buttonsStyle}>
      <FlatButton label="clear" />
      <RaisedButton
        backgroundColor="darkgray"
        label="submit"
      />
    </div>
  </div>
);

export default Feedback;
