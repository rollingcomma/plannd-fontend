/* eslint-disable jsx-a11y/alt-text*/
import React from 'react';
import Header from '../shared/Header';
import DesktopView from './DesktopView';
import MobileView from './MobileView'
import MobileProfile from './MobileProfile';

import PrivateRoute from '../../services/PrivateRoute';
import Profile from '../features/Profile';
import Project from '../features/Project';
import { Switch } from 'react-router-dom';
import { useWindowDimensions } from '../../context/customerHook';


const PrivateView = ({className}) => {
  const { width } = useWindowDimensions()
  return (
    <div className={className}>
      <Header />
      <Switch>
        <PrivateRoute path='/user/profile'>
          {width > 600 ? <Profile /> : <MobileProfile />}
        </PrivateRoute>
        <PrivateRoute path='/user/project'>
          <Project />
        </PrivateRoute>
        <PrivateRoute>
          {width > 600? <DesktopView /> : <MobileView />}
        </PrivateRoute>
      </Switch>
    </div>
  )
}
export default PrivateView
