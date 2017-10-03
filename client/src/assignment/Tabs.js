import React, { PurComponent } from 'react';

const style = {
  display: 'flex',
  height: '24px',
  width: '100%',
};

const tabStyle = (selected, me) => ({
  alignItems: 'center',
  background: selected === me ? 'white' : 'steelblue',
  color: selected === me ? 'slateblue' : 'white',
  display: 'flex',
  flex: 1,
  fontSize: '16px',
  height: '36px',
  justifyContent: 'center',
  lineHeight: '16px',
  textDecoration: 'none',
});

class Tabs extends PureComponent {

  render() {
    return (
      <div style={style}>{
        parts.map(({ name }) => (
          <div key={name} style={tabStyle()}>{name}</div>
        ))
      }</div>
    );
  }
}

export default Tabs;
