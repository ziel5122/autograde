import Subheader from 'material-ui/Subheader';
import React from 'react';

const Feedback = ({ feedback }) => (
  <div>
    <Subheader>Feedback</Subheader>
    <div
      style={{
        background: () => {
          switch (feedback) {
            case 'correct':
              return 'green';
            case 'incorrect':
              return 'red';
            default:
              return 'yellow';
          }
        },
      }}
    >
      {feedback}
    </div>
  </div>
);

export default Feedback;
