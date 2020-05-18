import React from 'react'
import { Route, Link, Switch, useLocation } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import ProfileDashboard from './ProfileDashboard';
import ProfileTheme from './ProfileTheme';
import ProfileSetting from './ProfileSetting';
import PrivateRoute from '../../services/PrivateRoute'
import NotFound from './NotFound'
import useUserState from '../../context/customerHook'

const Profile = () => {
  const [userState] = useUserState()
  let location = useLocation()
  const pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  return (
    <div className={"app justify-content " + userState.user.preference.theme + "-primary"}>
      <div className="side-nav">
        <Link to="/user/profile/picture"><img alt="" className={`icon-small note-icon ${pathname === "profile"||pathname==="picture"?"filter-notes":""}`} src="/assets/user-icon.svg" /></Link>
        <Link to="/user/profile/theme" ><img alt="" className={`icon-small note-icon ${pathname === "theme" ? "filter-todos" : ""}`} src="/assets/ic_invert_colors.svg" /></Link>
        <Link to="/user/profile/dashboard" ><img alt="" className={`icon-small note-icon ${pathname === "dashboard" ? "filter-links" : ""}`} src="/assets/dashboard-icon.svg" /></Link>
        <Link to="/user/profile/setting" ><img alt="" className={`icon-small note-icon ${pathname === "setting" ? "filter-gallery" : ""}`} src="/assets/gear-icon.svg" /></Link>
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