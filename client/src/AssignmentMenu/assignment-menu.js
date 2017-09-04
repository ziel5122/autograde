import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Assignment from 'material-ui/svg-icons/action/assignment';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react';
import { Link } from 'react-router-dom';
import v4 from 'uuid/v4';

import styles from './styles';

import {
  assignmentsSH,
  chevronLeft,
  chevronRight,
  menu1,
  menu2,
  menuLink,
  paper,
} from './styles';

const dates = [
  {
    day: '01',
    month: '08',
    year: '2017',
  },
  {
    day: '08',
    month: '08',
    year: '2017',
  },
  {
    day: '15',
    month: '08',
    year: '2017',
  },
  {
    day: '22',
    month: '08',
    year: '2017',
  },
  {
    day: '29',
    month: '08',
    year: '2017',
  },
];

const AssignmentMenu = ({
  assignmentMenuOpen,
  assignmentOpen,
  match: { url },
  toggleAssignmentMenu,
}) => (
  assignmentMenuOpen ? (
    <div style={menu1}>
      <Paper style={paper} zDepth={2}>
        <ChevronLeft onClick={toggleAssignmentMenu} style={chevronLeft} />
        <Subheader style={assignmentsSH}>Assignments</Subheader>
        {
          dates.map((date, index) => (
            <Link to={`${url}/${date.year}${date.month}${date.day}`} key={index} style={menuLink}>
              <MenuItem>
                <div style={{ display: 'flex', width: '96px' }}>
                  <span style={{ flex: '1', color: 'darkgray' }}>{index+1}</span>
                  <span style={{ color: '#404040' }}>{`${date.month}.${date.day}`}</span>
                </div>
              </MenuItem>
            </Link>
          ))
        }
      </Paper>
    </div>
  ) : (
    <div style={menu2}>
      <Paper style={paper} zDepth={2}>
        <ChevronRight onClick={toggleAssignmentMenu} style={chevronRight} />
        <Subheader style={{ padding: 0 }}>
          <div style={{ height: '23px' }}></div>
          <div style={{ background: 'orangered', height: '2px' }}></div>
          <div style={{ height: '23px' }}></div>
        </Subheader>
        {
          dates.map((date, index) => (
            <Link to={`${url}/${date.year}${date.month}${date.day}`} style={menuLink} key={index}>
              <MenuItem style={{ color: '#404040', textAlign: 'center' }}>{index+1}</MenuItem>
            </Link>
          ))
        }
      </Paper>
    </div>
  )
);

export default AssignmentMenu;
