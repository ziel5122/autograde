import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import React, { Component } from 'react';

class Classes extends Component {

  render() {
    return(
      <div className="Classes">
        <Subheader>Classes</Subheader>
        <MenuItem
          primaryText="Operating Systems (334)"
          menuItems={[
            <MenuItem primaryText="Homework 10" />
          ]}
        />
        <MenuItem
        primaryText="Data Mining (463)"
          menuItems={[
            <MenuItem primaryText="Homework 10" />
          ]}
        />
      </div>
    );
  }
}

export default Classes;
