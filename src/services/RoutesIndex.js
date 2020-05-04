import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login';
import Register from '../components/features/Register';
import DesktopView from '../components/views/DesktopView';
const RoutesIndex = () => {
  // debugger
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      {/* <Route path="/home">
        <DesktopView />
      </Route> */}
      <Route path="/">
        <DesktopView />
      </Route>
      
    </Switch>
  )
}

export default RoutesIndex