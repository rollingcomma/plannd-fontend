import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login';
import Register from '../components/features/Register';
// import DesktopView from '../components/views/DesktopView';
import Editor from '../components/features/Editor'
import Links from '../components/features/Links'
import Album from '../components/features/Album'
import Checklist from '../components/features/Checklist'
import PrivateRoute from '../services/PrivateRoute'
import PrivateView from '../components/views/PrivateView';

const RoutesIndex = ({data}) => {
  // debugger
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/">
        <PrivateView data={data}/>
      </PrivateRoute>
    </Switch>
  )
}

export default RoutesIndex