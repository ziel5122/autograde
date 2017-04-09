import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import React from 'react';

import Menu from './Menu';
import Routes from './Routes';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    console.log(this.state.open);
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <AppBar
          className="AppBar"
          onLeftIconButtonTouchTap={this.handleToggle}
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
