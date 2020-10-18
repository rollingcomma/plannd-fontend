import React, { useState } from 'react';
import { Route, Link, Switch, useLocation } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import ProfileDashboard from './ProfileDashboard';
import ProfileTheme from './ProfileTheme';
import ProfileSetting from './ProfileSetting';
import PrivateRoute from '../../services/PrivateRoute'
import NotFound from './NotFound'
import { useUserState, useWindowDimensions } from '../../context/customerHook'

const Profile = () => {
  const [userState] = useUserState();
  const [hoverState, setHoverState] = useState(false);
  let location = useLocation();
  const pathname = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  const { width } = useWindowDimensions();

  return (
    <div className="main-container">
      <div className="profile-container">
        <div className="profile-nav div-shadow">
          <div className={`mt-4 ${width > 600 ? "profile-image-nav" : ""}`}>
            {width > 600 &&
              <div className="profile-image-nav">
                <div className="d-flex flex-column justify-content-center align-items-center ">
                  <img className="profile-image-container-lg" alt=""
                    src={userState.user && userState.user.profile_photo ? userState.user.profile_photo.src : "http://craiglist2.s3-website.ca-central-1.amazonaws.com/plannd/default-user-icon.jpg"}></img>
                  <div className="my-2">{userState.user && userState.user.username}</div>
                </div>
              </div>
            }
            <div className="dropdown-divider"/>
            <div className="mt-3 profile-navbar">
              <Link to="/user/profile/picture"><img alt="" className={`icon-small note-icon ${pathname === "profile" || pathname === "picture" ? "filter-notes" : ""}`} src="/assets/user-icon.svg" /> Pictures</Link>
              <Link to="/user/profile/theme" ><img alt="" className={`icon-medium todo-icon ${pathname === "theme" ? "filter-todos" : ""}`} src="/assets/ic_invert_colors.svg" />Themes</Link>
              <Link to="/user/profile/dashboard" ><img alt="" className={`icon-small link-icon ${pathname === "dashboard" ? "filter-links" : ""}`} src="/assets/dashboard-icon.svg" /> Dashboard</Link>
              <Link to="/user/profile/setting" ><img alt="" className={`icon-small image-icon ${pathname === "setting" ? "filter-gallery" : ""}`} src="/assets/personal-info-icon.svg" /> Personal info</Link>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  )
}

export default Profile