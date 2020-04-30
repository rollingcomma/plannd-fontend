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
const Header = (props) =>{

  // render() {
    return (
      <div className="top-banner">
        <div className="logo">
          <img alt="" src="/assets/logo-horizontal.png" className="header_logo" />
        </div>
        <div className="dashboard-link">
          <img alt="" src="/assets/dashboard-icon.svg" className="dashboard-icon" />
          <a href="#">Dashboard</a>
        </div>
        <div className="login">
          <img alt="" src="/assets/profile-photo.jpg" className="profile-photo" />
          <p className="account-name">{props.username}</p>
          <DropdownMenu items={data.user_dropdown} offsetTop={20} closeOnOutsideClick closeOnEscape>
            <a href="#"><img alt="" src="/assets/downarrow-icon.png" className="downarrow-icon" /></a>
          </DropdownMenu>,

        </div>
      </div>
    )
  // }
}
  
// }

export default Header;