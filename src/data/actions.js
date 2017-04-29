function loginUser(username) {
  return {
    username,
    type: 'LOGIN_USER',
  };
}

function logoutUser() {
  return {
    type: 'LOGOUT_USER',
  };
}

export { loginUser, logoutUser };
