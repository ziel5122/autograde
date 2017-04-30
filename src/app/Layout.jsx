/* eslint react/prop-types: "warn" */
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import LogoutButton from '../public/LogoutButton';
import Menu from './Menu';
import Routes from './Routes';

const styles = {
  color: '#ffffff',
};

const AutoGradeBar = ({ isAuthenticated, onTouchTap }) => {
  const logoutStyles = isAuthenticated ? styles : { ...styles, display: 'none' };

  return (
    <AppBar
      className="AppBar"
      onLeftIconButtonTouchTap={onTouchTap}
      title="autograde"
      iconElementRight={<LogoutButton style={logoutStyles} />}
      iconStyleRight={{ verticalAlign: 'middle' }}
    />
  );
};

const AutoGradeBarRedux = connect(
  state => ({ isAuthenticated: state.isAuthenticated }),
)(AutoGradeBar);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onTouchTap() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <AutoGradeBarRedux onTouchTap={this.onTouchTap} />
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
