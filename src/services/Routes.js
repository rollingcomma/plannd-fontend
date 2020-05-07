import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/features/Login';
import Register from '../components/features/Register';
import IndexHeader from '../components/shared/IndexHeader';
import PrivateRoute from './PrivateRoute'
import PrivateView from '../components/views/PrivateView';
import Profile from '../components/features/Profile'
import Dashboard from '../components/features/Dashboard'
import NotFound from '../components/features/NotFound';

const Routes = () => {
  // debugger
  return (
    <Switch>
      <Route path="/register">
        <div>
        <IndexHeader />
        <Register/>
        </div>
      </Route>
      <Route exact path="/login">
        <div>
          <IndexHeader />
          <Login />
        </div>
      </Route>
      <PrivateRoute path="/user">
        <PrivateView />
      </PrivateRoute>
      <Route>
        <IndexHeader />
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes