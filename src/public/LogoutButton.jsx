/* eslint-env browser */
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const LogoutButton = ({ logoutUser, style }) => {
  const logout = () => {
    logoutUser();
    localStorage.removeItem('jwt');
  };

  return <FlatButton labelStyle={style} label="logout" onTouchTap={logout} />;
};

LogoutButton.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.string).isRequired,
};

const LogoutButtonRedux = connect(
  null,
  dispatch => ({ logoutUser: () => { dispatch({ type: 'LOGOUT_USER' }); } }),
)(LogoutButton);

export default LogoutButtonRedux;
