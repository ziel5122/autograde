import PropTypes from 'prop-types';
import React from 'react';

import Instruction from './Instruction';

const InstructionList = ({
  instructionBullet,
  instructionHighlightStyle,
  instructions,
  instructionStyle,
  style
}) => (
  <div style={style}>
    {
      instructions.map((instructionSegments, index) => (
        <Instruction
          bullet={instructionBullet}
          highlightStyle={instructionHighlightStyle}
          key={index}
          segments={instructionSegments}
          style={instructionStyle}
        />
      ))
    }
  </div>
);

InstructionList.defaultProps = {
  instructionBullet: ' - ',
  instructionHighlightStyle: {
    background: 'yellow',
  },
  instructionStyle: {
    whiteSpace: 'nowrap',
  },
  style: {
    border: '2px solid orangered',
    margin: '8px',
    padding: '8px',
  },
};

InstructionList.propTypes = {
  instructionBullet: PropTypes.string,
  instructionHighlightStyle: PropTypes.objectOf(PropTypes.string),
  instructions: PropTypes.arrayOf(PropTypes.array).isRequired,
  instructionStyle: PropTypes.objectOf(PropTypes.string),
  style: PropTypes.objectOf(PropTypes.string),
};

export default InstructionList;
