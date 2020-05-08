import React from 'react'
import {Redirect, Route } from 'react-router-dom'
import useUserState from '../helpers/customerHook';
import { checkLoggedIn } from './apiAction';

const PrivateRoute = ({ children, ...rest }) =>{

  const [userState, dispatch] = useUserState();

  if (!sessionStorage.getItem('isLoggedIn')) {
    checkLoggedIn()
      .then(res => {
        debugger
        const user = res.data
        if (user.auth) {
          dispatch({
            isLoggedIn: true,
            user: user.user,
            projectId: '5ea2098bce2a4e12abfcf052'
          })
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  debugger
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userState.isLoggedIn ? (
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
