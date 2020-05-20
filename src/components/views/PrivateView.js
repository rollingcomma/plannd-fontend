/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Header from '../shared/Header';
import DesktopBody from './DesktopBody';
// import { UserStateProvider } from '../HOC/Provider';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../services/PrivateRoute'
import Profile from '../features/Profile';
import Project from '../features/Project'
// import { data } from '../../context/data'

const PrivateView = ({className}) => {
  
  return (
    <div className={className}>
      <Header />
      <Switch>
        <PrivateRoute path='/user/profile'>
          < Profile />  
        </PrivateRoute>
        <PrivateRoute path='/user/project'>
          <Project />
        </PrivateRoute>
        <PrivateRoute>
          <DesktopBody/>
        </PrivateRoute>
      </Switch>
    </div>
  )
}
export default PrivateView
