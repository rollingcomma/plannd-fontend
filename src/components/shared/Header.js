import React from 'react';
// import connect from '../HOC/connect'
// import DropdownMenu from './DropDownMenu'
// import {data} from '../../services/data'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = ({user}) =>{
  // props.dispatch({ type: "FETCH_USER" });
  debugger
  return (
    <div className="top-banner">
      <div className="d-flex w-75">
        <div className="logo">
          <img alt="" src="/assets/logo-horizontal.png" className="header_logo" />
        </div>
        <div className="d-flex flex-row align-items-center pl-5 ml-5 w-75">
        <div className="current-trip">
          <p id="bali-text">My Trip to Bali</p>
          <div className="vertical-line"></div>
        </div>
        <div className="dashboard-link">
          <img alt="" src="/assets/dashboard-icon.svg" className="dashboard-icon" />
            <Link to="/user/dashboard" className="pointer">Dashboard</Link>
            
           
        </div>
        <div className="project-link">
          <img alt="" src="/assets/project-icon.png" className="project-icon"/>
            <p className="pointer">Browse Projects</p>
        </div>
        </div>
      </div>
      <div className="login">
        <img alt="" src="/assets/profile-photo.jpg" className="profile-photo" />
        <Link to="/user/profile" className="account-name">{user.username}</Link>
        
        {/* <DropdownMenu items={data.user_dropdown} offsetTop={20} closeOnOutsideClick closeOnEscape> */}
          <div className="pointer"><img alt="" src="/assets/downarrow-icon.png" className="downarrow-icon" /></div>
        {/* </DropdownMenu>, */}

      </div>
    </div>
  )
}
  

export default Header;