import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const style = {
  background: 'lightgray',
  display: 'flex',
  height: '36px',
  width: '100%',
};

const tabStyle = (selected, me) => ({
  alignItems: 'center',
  background: selected === me ? 'white' : 'whitesmoke',
  color: selected === me ? 'slateblue' : 'steelblue',
  display: 'flex',
  flex: 1,
  fontSize: '16px',
  height: '36px',
  justifyContent: 'center',
  lineHeight: '16px',
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
    const { assignments, match: { params: { name }, url } } = this.props;
    const parts = assignments[name] ? assignments[name].parts : [];

    return (
      <div style={style}>{
        parts.map(({ name }, index) => (
          <Link
            key={name}
            to={`${url}/${index}`}
            style={{
              flex: 1,
              textDecoration: 'none',
              marginLeft: index === 0 ? '24px' : '4px',
              marginRight: index === parts.length - 1 ? '0px' : '4px'
            }}
          >
            <div
              onClick={() => this.handleTabSelect(name)}
              style={tabStyle(true, name)}
            >
              {name}
            </div>
          </Link>
        ))
      }</div>
    );
  }
}

const mapStateToProps = ({ assignments }) => ({
  assignments,
});

export default withRouter(connect(mapStateToProps)(Tabs));
