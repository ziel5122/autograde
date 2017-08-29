import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Assignment from 'material-ui/svg-icons/action/assignment';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react';
import { Link } from 'react-router-dom';
import v4 from 'uuid/v4';

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
];

// const dog = { assignmentMenuOpen, dates, match: { url } };

const AssignmentMenu = ({ assignmentMenuOpen, match: { url }, toggleAssignmentMenu }) => (
  assignmentMenuOpen ? (
    <div>
      <ChevronLeft onClick={toggleAssignmentMenu} />
      <Subheader>Assignments</Subheader>
      {
        dates.map((date, index) => (
          <Link to={`${url}/${date}`} key={index}>
            <MenuItem>
              <div style={{ display: 'flex', width: '96px' }}>
                <span style={{ flex: '1', color: 'darkgray' }}>{index+1}</span>
                <span style={{ color: '#404040' }}>{`${date.month}.${date.day}`}</span>
              </div>
            </MenuItem>
          </Link>
        ))
      }
    </div>
  ) : (
    <div>
      <ChevronRight onClick={toggleAssignmentMenu} />
      <Subheader>-----------</Subheader>
      {
        dates.map((date, index) => (
          <Link to={`${url}/${date}`} key={index}>
            <MenuItem>
              <div style={{ display: 'flex', width: '96px' }}>
                <span style={{ flex: '1', color: 'darkgray' }}>{index}</span>
              </div>
            </MenuItem>
          </Link>
        ))
      }
    </div>
  )
);

/*
      <RightChevron />
      <Divider />{
      dates.map((date, index) => (
        <Link to={`${url}/${date}`}>
          <MenuItem>
            <div style={{ display: 'flex', width: '96px' }}>
              <span style={{ flex: '1', color: 'darkgray' }}>{index}</span>
              <span style={{ color: '#404040' }}>{`${month}.${date}`}</span>
            </div>
          </MenuItem>
        </Link>
      )){}
    )
  }</div>
);

/*
  dates.map((date, index) => (
    <Link to={`${url}/${date}`}>
      <MenuItem>
        <div style={{ display: 'flex', width: '96px' }}>
          <span style={{ flex: '1', color: 'darkgray' }}>{index}</span>
          <span style={{ color: '#404040' }}>{`${month}.${date}`}</span>
        </div>
      </MenuItem>
    </Link>
  ));
*/

/*
  ) : (
    {

    }
  )
);
*/

export default AssignmentMenu;
