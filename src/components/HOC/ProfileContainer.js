import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ProfileContainer = (Component) => ({ content }) => {
  
  const handlePreferenceSwitch = (preferenceName) => {

  }

  return (
    <div className="app justify-content">
      <div className="side-nav">
        <Link to="/user/profile/picture" onClick={() => handlePreferenceSwitch("picture")}><img alt="" className="icon-small note-icon" src="/assets/user-icon.svg" /></Link>
        <Link to="/user/profile/theme" onClick={() => handlePreferenceSwitch("theme")}><img alt="" className="icon-small todo-icon" src="/assets/checkbox-icon.svg" /></Link>
        <Link to="/user/profile/dashboard" onClick={() => handlePreferenceSwitch("dashboard")}><img alt="" className="icon-small link-icon" src="/assets/dashboard-icon.svg" /></Link>
        <Link to="/user/profile/information" onClick={() => handlePreferenceSwitch("information")}><img alt="" className="icon-small image-icon" src="/assets/gear-icon.svg" /></Link>
      </div>
      <Component content={content}></Component>
    </div>
  )
}

export default ProfileContainer