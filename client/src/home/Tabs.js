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
    const { data, match: { params: { name }, url }, setOpenTab } = this.props;
    const openTab = data[name] ? data[name].openTab : 0;
    const parts = data[name] ? data[name].parts : [];

    return (
      <div style={style}>{
        parts.map((part, index) => (
          <div
            key={part.name}
            onClick={() => setOpenTab(name, index)}
            style={tabStyle(openTab, index, parts.length)}
          >
            {part.name}
          </div>
        ))
      }</div>
    );
  }
}

const mapStateToProps = ({ assignments: { data } }) => ({
  data,
});

const mapDispatchToProps = dispatch => ({
  setOpenTab(name, openTab) {
    dispatch({
      name,
      openTab,
      type: 'SET_OPEN_TAB',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tabs));
