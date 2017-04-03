import AppBar from 'material-ui/AppBar';
import React, { PropTypes } from 'react';

class Container extends React.Component {
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
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      });
    }

    return (
      <div className="Container">
        <AppBar
          className="AppBar"
          title="Title"
          onLeftIconButtonTouchTap={this.handleDrawer}
        />
        <Drawer
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}
          width={200}
        />
      </div>
    );
  }
}

Container.contextTypes = {
  router: PropTypes.object,
}

export default Container;
