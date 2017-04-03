import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';

import Classes from '../menu/Classes';
import Landing from '../public/Landing';
import Support from '../menu/Support';

import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: props.title,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleClose() {this.setState({open: false})}

  handleDrawer() {this.setState({open: !this.state.open})}

  render() {
    return (
      <div className="Main">
        <AppBar
          className="AppBar"
          title={this.state.title}
          onLeftIconButtonTouchTap={this.handleDrawer}
        />
        <Drawer
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}
          width={200}
        >
          <Classes />
          <Divider />
          <Support />
        </Drawer>
        <Landing />
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
