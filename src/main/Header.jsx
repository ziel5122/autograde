import React, { Component, PropTypes } from 'react';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: props.subtitle,
      title: props.title,
    };
  }

  render() {
    return (
      <div className="Header">
        <h1>{this.state.title}</h1>
        <h2>{this.state.subtitle}</h2>
      </div>
    );
  }
}

Header.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

Header.defaultProps = {
  subtitle: 'Subtitle',
  title: 'Title',
};

export default Header;
