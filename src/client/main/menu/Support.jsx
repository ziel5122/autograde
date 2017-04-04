import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React, { Component } from 'react';

class Support extends Component {

  render() {
    return(
      <div>
        <Subheader>Support</Subheader>
        <MenuItem primaryText="Report a Problem" />
        <MenuItem primaryText="Information" />
      </div>
    );
  }
}

export default Support;
