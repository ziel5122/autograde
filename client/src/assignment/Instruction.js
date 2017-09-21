import PropTypes from 'prop-types';
import React from 'react';

const Instruction = ({ bullet, highlightStyle, segments, style }) => (
  <div style={style}>
    {bullet}
    {
      segments.map(({ text, highlight }, index) => (
        highlight ?
          <span key={index} style={highlightStyle}>{text}</span> :
          text
      ))
    }
  </div>
);

Instruction.defaultProps = {
  bullet: ' - ',
  highlightStyle: {
    background: 'yellow',
  },
  style: {
    whiteSpace: 'nowrap',
  },
};

Instruction.propTypes = {
  bullet: PropTypes.string,
  hightlightStyle: PropTypes.objectOf(PropTypes.string),
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

export default Instruction;
