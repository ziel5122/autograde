import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './Main.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
    };
  }

  render() {
    return (
      <div className="Main">
        <AppBar
          title={this.state.title}
        />
      </div>
    );
  }
}

Main.propTypes = {
  title: React.PropTypes.string,
};

Main.defaultProps = {
  title: 'Title',
};

export default Main;
