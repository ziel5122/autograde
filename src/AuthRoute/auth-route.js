import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, loggedIn, setFrom, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (loggedIn) {
        return <Component {...props} />;
      } else {
        setFrom(props.location);
        return <Redirect to="/login" />;
      }
    }}
  />
);

export default AuthRoute;
