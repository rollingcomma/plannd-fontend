import React from 'react'
import { Route, Link, Switch, useLocation } from 'react-router-dom';
import ProfilePicture from '../features/ProfilePicture';
import ProfileDashboard from '../features/ProfileDashboard';
import ProfileTheme from '../features/ProfileTheme';
import ProfileSetting from '../features/ProfileSetting';
import PrivateRoute from '../../services/PrivateRoute'
import NotFound from '../features/NotFound'
import useUserState from '../../context/customerHook'

const MobileProfile = () => {

  const [userState] = useUserState()
  let location = useLocation()
  const pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  return (
    <div className="app">
      
      <Switch>
        <PrivateRoute exact path={["/user/profile/picture", "/user/profile"]}>
          <ProfilePicture />
        </PrivateRoute>
        <PrivateRoute path="/user/profile/theme" >
          <ProfileTheme />
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
      <div className={`mobile-footer-nav ${userState && userState.user ? userState.user.preference.theme + "-secondary" : "classic-secondary"}`}>
        <Link to="/user/profile/picture"><img alt="" className={`icon-medium note-icon ${pathname === "profile" || pathname === "picture" ? "filter-notes" : ""}`} src="/assets/user-icon.svg" /></Link>
        <Link to="/user/profile/theme" ><img alt="" className={`icon-medium todo-icon ${pathname === "theme" ? "filter-todos" : ""}`} src="/assets/ic_invert_colors.svg" /></Link>
        <Link to="/user/profile/dashboard" ><img alt="" className={`icon-medium link-icon ${pathname === "dashboard" ? "filter-links" : ""}`} src="/assets/dashboard-icon.svg" /></Link>
        <Link to="/user/profile/setting" ><img alt="" className={`icon-medium image-icon ${pathname === "setting" ? "filter-gallery" : ""}`} src="/assets/gear-icon.svg" /></Link>
      </div>
    </div>
  )
}

export default MobileProfile