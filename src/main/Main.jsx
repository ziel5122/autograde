import React, { Component } from 'react';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      desc: props.desc,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <div>
          <h3>{this.state.desc}</h3>
        </div>
        <div>
          <h3>Login to 463</h3>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  title: React.PropTypes.string,
  desc: React.PropTypes.string,
};

Main.defaultProps = {
  title: 'CST 334/463 Autograde Portal',
  desc: 'Login to 334',
};

export default Main;
