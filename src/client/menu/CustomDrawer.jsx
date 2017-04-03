import Drawer from 'material-ui/Drawer';
import React from 'react';

import Classes from './Classes';
import Support from './Support';

class CustomDrawer extends Drawer {

  constructor(props) {
    super(props);
    this.setState({
      open: props.open,
    });
  }

  render() {
    return(
      <div className="CustomDrawer">
        <Drawer
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}
          width={this.state.width}
        >
          <Classes />
          <Support />
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;
