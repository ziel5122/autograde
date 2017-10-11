import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Tab from './Tab';

const style = {
  background: 'lightgray',
  display: 'flex',
  height: '36px',
  width: '100%',
};

const tabStyle = (selected, me, length) => ({
  alignItems: 'center',
  background: selected === me ? 'white' : 'whitesmoke',
  color: selected === me ? 'slateblue' : 'steelblue',
  cursor: 'hand',
  cursor: 'pointer',
  display: 'flex',
  flex: 1,
  fontSize: '16px',
  height: '36px',
  justifyContent: 'center',
  lineHeight: '16px',
  marginLeft: me === 0 ? '24px' : '4px',
  marginRight: me === length - 1 ? '200px' : '4px',
  textDecoration: 'none',
});

const Tabs = ({
  assignments,
  match: { params: { assignmentId }, url },
  parts,
  setOpenTab,
}) => {
  const { openTab, partIds } = assignments[assignmentId];

  return (
    <div style={style}>{
      partIds.map(partId => (
        <Tab
          assignmentId={assignmentId}
          key={partId}
          name={parts[partId].name}
          partId={partId}
          style={tabStyle(openTab, partId, partIds.length)}
        />
      ))
    }</div>
  );
};

const mapStateToProps = ({ assignments, parts }) => ({
  assignments,
  parts,
});

export default withRouter(connect(mapStateToProps)(Tabs));
