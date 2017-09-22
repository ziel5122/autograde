import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { connect } from 'react-redux';

const actionStyles = {
  padding: '8px',
};

const Actions = ({ attempts, code }) => (
  <div style={actionStyles}>
    <div
      style={{
        lineHeight: '16px',
        paddingBottom: '8px',
        paddingTop: '8px',
      }}
    >
      <div>
        Attempts
      </div>
      <div style={{ color: attempts ? 'black' : 'red' }}>
        {attempts}
      </div>
    </div>
    <FlatButton
      backgroundColor="darkgray"
      disabled={!attempts}
      hoverColor="orangered"
      label="submit"
      labelStyle={{ color: 'white' }}
      onClick={() => {
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
      style={{ marginBottom: '8px', marginTop: '8px' }}
    />
  </div>
);

const mapStateToProps = ({ attempts, code }) => ({
  attempts,
  code,
});

const mapDispatchToProps = dispatch => ({
  setAttempts(attempts) {
    dispatch({
      attempts,
      type: 'SET_ATTEMPTS',
    });
  },

  setFeedback(feedback) {
    dispatch({
      feedback,
      type: 'SET_FEEDBACK',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
