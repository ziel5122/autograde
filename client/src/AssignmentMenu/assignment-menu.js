import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react';
import { Link } from 'react-router-dom';

import {
  assignmentsSH,
  chevronLeft,
  chevronRight,
  menu1,
  menu2,
  menuLink,
  paper,
} from './styles';

const assignments = [
  {
    dueDate: {
      day: '28',
      month: '08',
      year: '2017',
    },
  },
  {
    dueDate: {
      day: '04',
      month: '09',
      year: '2017',
    },
  },
  {
    dueDate: {
      day: '11',
      month: '09',
      year: '2017',
    },
  },
];

const AssignmentMenu = ({
  assignmentMenuOpen,
  match,
  toggleAssignmentMenu,
}) => (
  assignmentMenuOpen ? (
    <div style={menu1}>
      <Paper style={paper} zDepth={2}>
        <ChevronLeft onClick={toggleAssignmentMenu} style={chevronLeft} />
        <Subheader style={assignmentsSH}>Assignments</Subheader>
        {
          assignments.map(({ dueDate }, index) => (
            <Link
              to={`${match.url}/${dueDate.year}${dueDate.month}${dueDate.day}`}
              style={menuLink}
              key={index}
            >
              <MenuItem>
                <div style={{ display: 'flex', width: '96px' }}>
                  <span style={{ flex: '1', color: 'darkgray' }}>
                    {index + 1}
                  </span>
                  <span style={{ color: '#404040' }}>
                    {`${dueDate.month}.${dueDate.day}`}
                  </span>
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
          <div style={{ height: '23px' }} />
          <div style={{ background: 'orangered', height: '2px' }} />
          <div style={{ height: '23px' }} />
        </Subheader>
        {
          assignments.map(({ dueDate }, index) => (
            <Link
              to={`${match.url}/${dueDate.year}${dueDate.month}${dueDate.day}`}
              style={menuLink}
              key={index}
            >
              <MenuItem style={{ color: '#404040', textAlign: 'center' }}>
                {index + 1}
              </MenuItem>
            </Link>
          ))
        }
      </Paper>
    </div>
  )
);

export default AssignmentMenu;
