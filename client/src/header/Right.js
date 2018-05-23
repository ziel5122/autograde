import React from 'react';
import { connect } from 'react-redux';

import Github from './Github';
import LogoutButton from './LogoutButton';

const Right = ({ loggedIn }) => (loggedIn ? <LogoutButton /> : <Github />);

const mapStateToProps = ({ auth: { loggedIn } }) => ({
  loggedIn,
});

export default connect(mapStateToProps)(Right);
