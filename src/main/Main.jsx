import React, { Component } from 'react';

import Header from './Header';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">
        <Header />
      </div>
    );
  }
}

export default Main;
