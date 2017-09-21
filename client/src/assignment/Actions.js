import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import React from 'react';

const Actions = () => (
  <div>
    <div>
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
  </div>
);

export default Actions;
