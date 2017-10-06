import Paper from 'material-ui/Paper';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Menu from './sidebar/Menu';
import MenuToggle from './sidebar/MenuToggle';

const style = {
  display: 'flex',
  height: '100%',
};

class Sidebar extends PureComponent {
  constructor() {
    super();
    this.state = {
      open: true,
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
      <Paper style={style} zDepth={5}>
        <MenuToggle open={open} toggleOpen={this.toggleOpen} />
        <Menu open={open} toggleOpen={this.toggleOpen} />
      </Paper>
    );
  }
}

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default connect(mapStateToProps)(Sidebar);
