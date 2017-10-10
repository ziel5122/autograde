import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

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

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }

  handleTabSelect(tabName) {
    this.setState({ selected: tabName });
  }

  render() {
    const {
      assignments,
      match: { params: { assignmentId }, url },
      parts,
      setOpenTab
    } = this.props;
    const assignment = assignments[assignmentId];
    const { openTab, partIds } = assignment;

    return (
      <div style={style}>{
        partIds.map((partId) => (
          <div
            key={partId}
            onClick={() => setOpenTab(assignmentId, partId)}
            style={tabStyle(openTab, partId, partIds.length)}
          >
            {parts[partId].name}
          </div>
        ))
      }</div>
    );
  }
}

const mapStateToProps = ({ assignments, parts }) => ({
  assignments,
  parts,
});

const mapDispatchToProps = dispatch => ({
  setOpenTab(assignmentId, partId) {
    dispatch({
      partId,
      id: assignmentId,
      type: 'SET_OPEN_TAB',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tabs));
