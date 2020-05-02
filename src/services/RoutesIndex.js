import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login'
import Register from '../components/features/Register'

const RoutesIndex = () => {
  debugger
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      
      <Route path={"/" | "/login"}>
        <Login />
      </Route>
      
    </Switch>
  )
}

export default RoutesIndex