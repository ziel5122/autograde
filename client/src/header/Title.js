import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ style }) => (
  <div style={style}>
    autograde
  </div>
);

Title.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
};

export default Title;
