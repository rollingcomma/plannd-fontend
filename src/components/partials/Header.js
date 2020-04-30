import React, {useState}from 'react';
import DropdownMenu from './DropDownMenu'
import {data} from '../../services/data'
// class Header extends React.Component {
  // constructor(username) {
  //   // debugger
  //   super();
  //   this.state = {
  //     username: username
  //   }
  // }
const Header = ({user}) =>{

  // render() {
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
            <a href="#">Dashboard</a>
          </div>
          <div className="project-link">
            <img src="/assets/project-icon.png" className="project-icon"/>
              <a href="#">Browse Projects</a>
          </div>
          </div>
        </div>
        <div className="login">
          <img alt="" src="/assets/profile-photo.jpg" className="profile-photo" />
          <p className="account-name">{user.username}</p>
          {/* <DropdownMenu items={data.user_dropdown} offsetTop={20} closeOnOutsideClick closeOnEscape>
            <a href="#"><img alt="" src="/assets/downarrow-icon.png" className="downarrow-icon" /></a>
          </DropdownMenu>, */}

        </div>
      </div>
    )
  // }
}
  
// }

export default Header;