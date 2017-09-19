import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import { connect } from 'react-redux';

const assignments = [
  {
    hwNum: 3,
    name: 'Assignment 3',
  },
];

const headerStyles = {
  alignItems: 'center',
  display: 'flex',
  height: '56px',
  justifyContent: 'center',
};

const assignmentMenu = assignments.map(({ hwNum, name }) => (
  <MenuItem primaryText={name} value={hwNum} key={hwNum} />
));

const handleChange = (hwNum, setHwNum) => setHwNum(hwNum);

const Header = ({ hwNum, setHwNum }) => (
  <div style={headerStyles}>
    <div style={{ flex: 1, textAlign: 'center' }}>
      <DropDownMenu
        onChange={(event, index, value) => handleChange(value, setHwNum)}
        selectedMenuItemStyle={{ color: 'orangered' }}
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
  </div>
);

const mapStateToProps = ({ hwNum }) => ({
  hwNum,
});

const mapDispatchToProps = dispatch => ({
  setHwNum(hwNum) {
    dispatch({
      hwNum,
      type: 'SET_HW_NUM',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
