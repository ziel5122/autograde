import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({
  component: Component,
  loggedIn,
  setPrevious,
  setRedirect,
  ...rest,
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (loggedIn) {
        return <Component {...props} />;
      } else {
        setPrevious(props.location);
        console.log(props.location);
        return <Redirect to="/login" />;
      }
    }}
  />
);

export default AuthRoute;
