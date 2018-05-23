import Paper from 'material-ui/Paper';
import React, { PureComponent } from 'react';

import Menu from './sidebar/Menu';
import MenuToggle from './sidebar/MenuToggle';

const style = {
  display: 'flex',
  height: '100%',
};

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: !this.props.match.params.name,
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
    const open = this.state.open || !this.props.match.params.name;

    return (
      <Paper style={style} zDepth={5}>
        <MenuToggle open={open} toggleOpen={this.toggleOpen} />
        <Menu open={open} toggleOpen={this.toggleOpen} />
      </Paper>
    );
  }
}

export default Sidebar;
