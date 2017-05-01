import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      title={<Link className="title-link" to="/">{'autograde'}</Link>}
      iconElementRight={<LogoutButton style={logoutStyles} />}
      iconStyleRight={{ verticalAlign: 'middle' }}
    />
  );
};

AutoGradeBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onTouchTap: PropTypes.func.isRequired,
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
    this.onTouchTap = this.onTouchTap.bind(this);
  }

  onTouchTap() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <AutoGradeBarRedux
          onTouchTap={this.onTouchTap}
        />
        <Drawer
          docked={false}
          onRequestChange={open => this.setState({ open })}
          open={this.state.open}
        >
          <Menu onTouchTap={this.onTouchTap} />
        </Drawer>
        <Routes />
      </div>
    );
  }
}

export default Layout;
