import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DesktopBody from '../components/views/DesktopBody';
import Profile from '../components/features/Profile'
import Dashboard from '../components/features/Dashboard'

const RoutesUser = () => {
  debugger
  return (
    <Switch>
      <Route path="/home">
        <DesktopBody />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
    </Switch>
  )
}

export default  RoutesUser;