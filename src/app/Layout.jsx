import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import React, { Component } from 'react';

import Menu from './Menu';
import Routes from './Routes';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <AppBar
          className="AppBar"
          onLeftIconButtonTouchTap={() => {
            this.setState({
              open: !this.state.open,
            });
          }}
          title="autograde"
        />
        <Drawer
          docked={false}
          onRequestChange={open => this.setState({ open })}
          open={this.state.open}
        >
          <Menu />
        </Drawer>
        <Routes />
      </div>
    );
  }
}

export default Layout;
