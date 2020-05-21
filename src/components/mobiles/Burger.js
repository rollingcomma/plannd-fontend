import React from 'react'
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

const Burger = ({open, setOpen}) => {
  return(
    <HamburgerMenu 
    isOpen = {open}
    menuClicked={() => setOpen()}>
      <Link className="" to="/user/dashboard"><img alt="" src="/assets/gear.png" className="icon-small" />Dashboard</Link>
      <Link className="" to="/user/profile"><img alt="" src="/assets/gear.png" className="icon-small" />Profile Setting</Link>
      <Link className="" to="/login" onClick={() => handleLogout()}><img alt="" src="/assets/signs.png" className="icon-small" />Log Out</Link>
    </HamburgerMenu>
  )
}

export default Burger;