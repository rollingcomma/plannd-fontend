import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login';
import Register from '../components/features/Register';
import DesktopView from '../components/views/DesktopView';
import Editor from '../components/features/Editor'
import Links from '../components/features/Links'
import Album from '../components/features/Album'
import Checklist from '../components/features/Checklist'
import IndexHeader from '../components/shared/IndexHeader';
import PrivateRoute from '../services/PrivateRoute'
import PrivateView from '../components/views/PrivateView';

const RoutesIndex = () => {
  // debugger
  return (
    <Switch>
      <Route path="/register">
        <div>
        <IndexHeader />
        <Register/>
        </div>
      </Route>
      <Route path="/login">
        <div>
          <IndexHeader />
          <Login />
        </div>
      </Route>
      <PrivateRoute path="/">
        <PrivateView />
      </PrivateRoute>
    </Switch>
  )
}

export default RoutesIndex