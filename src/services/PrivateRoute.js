import React from 'react'
import {Redirect, Route } from 'react-router-dom'
import useUserState from '../helpers/customerHook';
import { checkLoggedIn } from './apiAction';

const PrivateRoute = ({ children, ...rest }) =>{

  const [userState, dispatch] = useUserState();

  if (! userState.isLoggedIn) {
  // useEffect(() => {
    checkLoggedIn()
    .then(res => {
      debugger
      const user = res.data
      if (user.auth) {
        dispatch({
          isLoggedIn:true,
          user: user
        })
        // window.localStorage.setItem('isLoggedIn', true)
        // window.localStorage.setItem('user', user)
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
