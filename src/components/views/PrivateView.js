/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Header from '../shared/Header';
import DesktopBody from './DesktopBody';
// import { UserStateProvider } from '../HOC/Provider';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../services/PrivateRoute'
import Profile from '../features/Profile'
import { data } from '../../store/data'

const PrivateView = () => {
  debugger
  return (
    <div>
      <Header user={data.user} />
      <Switch>
        <PrivateRoute path='/user/profile'>
          < Profile />  
        </PrivateRoute>
        <PrivateRoute >
          <DesktopBody data={data} />
        </PrivateRoute>
      </Switch>    
    </div>
  )
}
export default PrivateView
