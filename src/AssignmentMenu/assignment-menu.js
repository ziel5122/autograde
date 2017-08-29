import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Assignment from 'material-ui/svg-icons/action/assignment';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react';
import v4 from 'uuid/v4';

import Assignments from './assignments';

const AssignmentMenu = ({ assignmentMenuOpen, dates, match: { url } }) => {
  const assignments = assignmentMenuOpen ? dates.map(({ month, day }, index) => (
      <div style={{ display: 'flex', width: '96px' }}>
        <span style={{ flex: '1', color: 'darkgray' }}>{index}</span>
        <span style={{ color: '#404040' }}>{`${month}.${day}`}</span>
      </div>
    )) : dates.map((date, index) => index);
};

  assignmentMenuOpen ? (
    <ChevronLeft />
    <Subheader>Assignments</Subheader>
    {
      dates.map((date, index) => (
        <Link to={`${url}/${date}`}>
          <MenuItem>
            <div style={{ display: 'flex', width: '96px' }}>
              <span style={{ flex: '1', color: 'darkgray' }}>1</span>
              <span style={{ color: '#404040' }}>8.28</span>
            </div>
          </MenuItem>
        </Link>
      ));
    }
  ) : (
    <ChevronRight />
    <Assignment />
  )
  <Assignments assignmentMenuOpen={assignmentMenuOpen} dates={dates} />
);
