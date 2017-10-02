import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';

const linkStyle = (selected, me) => ({
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

const style = {
  display: 'flex',
  width: '100%',
};

class HomeTabs extends PureComponent {
  state = {
    selected: 1,
  };

  render() {
    const { url } = this.props.match;

    return (
      <div style={style}>
        <Link
          onClick={() => this.setState({ selected: 1 })}
          style={linkStyle(this.state.selected, 1)}
          to={`${url}/assignments`}
        >
          assignments
        </Link>
        <Link
          onClick={() => this.setState({ selected: 2 })}
          style={linkStyle(this.state.selected, 2)}
          to={`${url}/grades`}
        >
          grades
        </Link>
        <Link
          onClick={() => this.setState({ selected: 3 })}
          style={linkStyle(this.state.selected, 3)}
          to={`${url}/users`}
        >
          users
        </Link>
      </div>
    );
  }
}

export default withRouter(HomeTabs);
