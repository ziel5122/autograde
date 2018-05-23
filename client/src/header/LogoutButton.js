import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { setAdmin, setLoggedIn } from '../redux/actions/auth';

const style = {
  fontSize: '16px',
  lineHeight: '16px',
  padding: '12px',
};

class LogoutButton extends PureComponent {
  onClick = () => {
    const { dispatch } = this.props;
    dispatch(setAdmin(false));
    dispatch(setLoggedIn(false));
  }

  render() {
    return (
      <div
        className="logout"
        onClick={this.onClick}
        role="button"
        style={style}
        tabIndex={0}
      >
        logout
        <style jsx>{`
          .logout {
            cursor: hand;
            cursor: pointer;
          }

          .logout:hover {
            background: rgba(106, 90, 205, .25);
          }
        `}</style>
      </div>
    );
  }
}

export default connect()(LogoutButton);
