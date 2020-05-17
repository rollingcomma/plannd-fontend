import React from 'react'
import {Redirect, Route } from 'react-router-dom'
import { useUserState } from '../context/customerHook';

const PrivateRoute = ({ children, ...rest }) =>{

  const [userState] = useUserState();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userState.isLoggedIn? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
export default PrivateRoute
