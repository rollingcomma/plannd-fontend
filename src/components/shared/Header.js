import React from 'react';

// import connect from '../HOC/connect'
// import DropdownMenu from './DropDownMenu'
// import {data} from '../../services/data'
import { useHistory, Link } from 'react-router-dom';
import { logout } from '../../services/apiAction'
const Header = ({user}) =>{
  // props.dispatch({ type: "FETCH_USER" });
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    logout()
    .then(res => {
      history.push('/')
    })
  }

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
            <Link to="/user/dashboard" className="text-dark">Dashboard</Link>           
        </div>
        <div className="project-link">
          <img alt="" src="/assets/project-icon.png" className="project-icon"/>
            <p className="pointer">Browse Projects</p>
            {/* <DropdownMenu items={data.user_dropdown} offsetTop={20} closeOnOutsideClick closeOnEscape> */}
            {/* </DropdownMenu>, */}
        </div>
        </div>
      </div>
      <div className="login">
        <img alt="" src="/assets/profile-photo.jpg" className="profile-photo" />
        <div className="nav-item dropdown">
          <button className="btn btn-linkT text-dark account-name dropdown-toggle" id="dropdwon-menu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {user.username}</button>
          <div className="dropdown-menu" aria-labelledby="dropdwon-menu">
            <Link className="dropdown-item" to="/" onClick={() => handleLogout()}><img alt="" src="/assets/signs.png" className="icon-small" />Log Out</Link>
            <Link className="dropdown-item" to="/user/profile"><img alt="" src="/assets/gear.png" className="icon-small" />Profile Setting</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
  

export default Header;