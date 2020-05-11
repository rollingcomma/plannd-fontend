/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Header from '../shared/Header';
import DesktopBody from './DesktopBody';
// import { UserStateProvider } from '../HOC/Provider';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../services/PrivateRoute'
import Profile from '../features/Profile'
import ProfileContainer from '../HOC/ProfileContainer';
// import { data } from '../../context/data'

const PrivateView = () => {
  
  return (
    <div>
      <Header />
      <Switch>
        <PrivateRoute path='/user/profile'>
          < ProfileContainer />  
        </PrivateRoute>
        <PrivateRoute>
          <DesktopBody/>
        </PrivateRoute>
      </Switch>    
    </div>
  )
}
export default PrivateView
