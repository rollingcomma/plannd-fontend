import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import ProfileDashboard from './ProfileDashboard';
import ProfileTheme from './ProfileTheme';
import ProfileSetting from './ProfileSetting';
import PrivateRoute from '../../services/PrivateRoute'
import NotFound from './NotFound'

const Profile = () => {
  
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

export default Profile