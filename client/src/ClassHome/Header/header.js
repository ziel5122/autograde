import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';

import assignments from '../../../data/assignments';
import styles from './styles';

const assignmentMenu = assignments.map(({ hwNum, name }) => (
  <MenuItem primaryText={name} value={hwNum} key={hwNum} />
));

const handleChange = (hwNum, setHwNum) => setHwNum(hwNum);

const Header = ({ hwNum, setHwNum }) => (
  <div style={styles.header}>
    <div style={{ flex: 1, textAlign: 'center' }}>
      <DropDownMenu
        onChange={(event, index, value) => handleChange(value, setHwNum)}
        selectedMenuItemStyle={{ color: 'orangered' }}
        style={styles.drowDownMenu}
        value={hwNum}
      >
        {assignmentMenu}
      </DropDownMenu>
    </div>
    <div style={{ flex: 1, textAlign: 'center' }}>
      <FlatButton
        backgroundColor="darkgray"
        hoverColor="orangered"
        onClick={() => {
          fetch('http://localhost:8892/docker/run', {
            body: JSON.stringify({
              code: this.state.code,
              id: '0808',
              hwNum: this.props.hwNum,
            }),
            headers: {
              'content-type': 'application/json',
            },
            method: 'post',
          })
            .then(feedback => feedback.text())
            .then(text => this.setState({ feedback: text }))
            .catch(err => console.error(err));
        }}
        label="submit"
        labelStyle={{ color: 'white' }}
      />
    </div>
    <div>

    </div>
  </div>
);

export default Header;
