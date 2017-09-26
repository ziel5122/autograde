import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import React from 'react';
import { connect } from 'react-redux';

const menuStyle = {
  display: 'flex',
};

const paperStyle = {
  background: 'whitesmoke',
  flex: 1,
  maxWidth: '1000px'
};

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  width: '100%',
};

const Home = ({ assignments }) => (
  <div style={style}>
    <Paper style={paperStyle} zDepth={5}>
      <div style={menuStyle}>
        <Menu>
          <Subheader>Assignments</Subheader>
          {
            assignments.filter(({ visible }) => visible)
            .map(({ id, name, dueDate, parts }) => {
              if (parts) {
                return (
                  <MenuItem
                    key={id}
                    menuItems={
                      parts.map(({ name }) => {
                        return <MenuItem primaryText={name} />
                      })
                    }
                    rightIcon={<ArrowDropRight />}
                    primaryText={name}
                  />
                )
              }
              return <MenuItem key={id}>{name}</MenuItem>;
            })
          }
          <Divider />
          <Subheader>Options</Subheader>
        </Menu>
      </div>
    </Paper>
  </div>
);

const mapStateToProps = ({ assignments: { assignments } }) => ({
  assignments,
});

export default connect(mapStateToProps)(Home);
