import PropTypes from 'prop-types';
import React from 'react';

const InstructionList = ({
  bullet,
  instructions,
  style
}) => (
  <div style={style}>
    {
      instructions.map((instruction, index) => (
        <div key={index}>
          {bullet}
          {instruction}
        </div>
      ))
    }
  </div>
);

InstructionList.defaultProps = {
  bullet: ' - ',
  style: {
    border: '2px solid orangered',
    margin: '8px',
    padding: '8px',
    whiteSpace: 'nowrap',
  },
};

InstructionList.propTypes = {
  bullet: PropTypes.string,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

export default InstructionList;
