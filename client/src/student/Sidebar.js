import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Menu from './Menu';
import MenuToggle from './MenuToggle';

const style = {
  display: 'flex',
  height: '100%',
};

class Sidebar extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  handleClick() {
    this.toggleOpen();
  }

  render() {
    const { assignments } = this.props;
    const { open } = this.state;

    return (
      <div style={style}>
        <MenuToggle open={open} toggleOpen={this.toggleOpen} />
        <Menu id="MMMenu" open={open} toggleOpen={this.toggleOpen} />
      </div>
    );
  }
}

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default connect(mapStateToProps)(Sidebar);
