import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProfilePicture from '../features/ProfilePicture';
import ProfileDashboard from '../features/ProfileDashboard';
import ProfileTheme from '../features/ProfileTheme';
import ProfileSetting from '../features/ProfileSetting';
import PrivateRoute from '../../services/PrivateRoute'
import NotFound from '../features/NotFound'

const ProfileContainer = () => {
  // //debugger
  return (
    <div className="app justify-content">
      <div className="side-nav">
        <Link to="/user/profile/picture"><img alt="" className="icon-small note-icon" src="/assets/user-icon.svg" /></Link>
        <Link to="/user/profile/theme" ><img alt="" className="icon-theme todo-icon" src="/assets/ic_invert_colors.svg" /></Link>
        <Link to="/user/profile/dashboard" ><img alt="" className="icon-small link-icon" src="/assets/dashboard-icon.svg" /></Link>
        <Link to="/user/profile/setting" ><img alt="" className="icon-small image-icon" src="/assets/gear-icon.svg" /></Link>
      </div>
      <Switch>
        <PrivateRoute exact path={["/user/profile/picture", "/user/profile"]}>
          <ProfilePicture />
        </PrivateRoute>
        <PrivateRoute path="/user/profile/theme" >
          <ProfileTheme  />
        </PrivateRoute>
        <PrivateRoute path="/user/profile/dashboard" >
          <ProfileDashboard />
        </PrivateRoute>
        <PrivateRoute path="/user/profile/setting" >
          <ProfileSetting />
        </PrivateRoute>
        <Route path="/user/profile/*">
          <NotFound />
        </Route>
      </Switch>
      
    </div>
  )
}

export default ProfileContainer