const styles = {
  menuLink(loggedIn) {
    return {
      color: loggedIn ? '#404040' : 'lightgray',
      textDecoration: 'none',
    };
  },
};

export default styles;
